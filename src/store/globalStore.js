/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';

import { get, set } from '../utils/localStorage';
import { dateSort, senderSort, receiverSort } from '../utils/sort';

import { auth as getAuth } from '../api/auth';
import { getUnreadMessages, getArchiveMessages } from '../api/messages';
import { getFiles } from '../api/files';
import { getSchedule } from '../api/schedule';

export class globalStore {
  session = undefined;

  //messages
  messages = [];
  messagesSorted = undefined;

  //files
  files = [];
  filesSorted = undefined;

  //schedule
  schedule = [];
  activeSchedule = undefined;

  //flags
  loading = false;
  authError = false;

  //Footer actions
  footerActions = [];

  //Header actions
  headerActions = [];
  constructor() {
    makeAutoObservable(this);

    const session = get('session', res => (this.session = res.session));
    if (session) this.session = session;
  }

  async auth(login, password) {
    let res;

    this.loading = true;
    try {
      res = await getAuth(login, password);
    } catch (error) {
      this.reset();

      return;
    }

    this.loading = false;
    this.session = res.data.session;
    set('session', res.data.session);
  }

  async unreadMessages() {
    let res;

    this.messagesSorted = undefined;
    this.loading = true;
    try {
      res = await getUnreadMessages(this.session);
    } catch (error) {
      this.reset();

      return;
    }

    this.loading = false;
    this.messages = res.data;
  }

  async archiveMessages() {
    let res;

    this.messagesSorted = undefined;
    this.loading = true;

    try {
      res = await getArchiveMessages(this.session);
    } catch (error) {
      this.reset();

      return;
    }

    this.loading = false;
    this.messages = res.data;
  }

  async getFiles() {
    let res;

    this.loading = true;

    try {
      res = await getFiles(this.session);
    } catch (error) {
      this.reset();

      return;
    }

    this.loading = false;
    this.files = res.data;
  }

  async getSchedule() {
    let res;

    this.loading = true;

    try {
      res = await getSchedule(this.session);
    } catch (error) {
      this.reset();

      return;
    }

    if (res === null) {
      this.reset();
    }
    this.loading = false;
    this.schedule = res.data;
    this.activeSchedule = this.schedule[0];
  }

  reset(soft = false) {
    if (soft) {
      this.messages = [];
      this.files = [];
      this.schedule = [];
      this.loading = false;
      this.filesSorted = undefined;
      this.messagesSorted = undefined;
      this.footerActions = [];
      this.headerActions = [];
      this.activeSchedule = undefined;
    } else {
      this.session = undefined;
      this.messages = [];
      this.files = [];
      this.schedule = [];
      this.loading = false;
      this.filesSorted = undefined;
      this.messagesSorted = undefined;
      this.footerActions = [];
      this.headerActions = [];
      this.activeSchedule = undefined;
    }
  }

  filesSort(param) {
    switch (param) {
      case 'sender':
        this.filesSorted = receiverSort(this.files);
        break;
      case 'date':
        this.filesSorted = dateSort(this.files);
        break;
      default:
        return;
    }
  }

  messagesSort(param) {
    switch (param) {
      case 'sender':
        this.messagesSorted = senderSort(this.messages);
        break;
      case 'date':
        this.messagesSorted = dateSort(this.messages);
        break;
      default:
        return;
    }
  }
}

let store;

export function getStore() {
  if (!store) {
    store = new globalStore();
  }

  return store;
}
