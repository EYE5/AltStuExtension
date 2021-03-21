/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';
import { get, set } from '../utils/localStorage';

import { auth as getAuth } from '../api/auth';
import { getUnreadMessages, getArchiveMessages } from '../api/messages';
import { getFiles } from '../api/files';
import { getSchedule } from '../api/schedule';

export class globalStore {
  session = undefined;
  messages = [];
  files = [];
  schedule = [];
  loading = false;
  authError = false;
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
  }

  reset() {
    this.session = undefined;
    this.messages = [];
    this.files = [];
    this.schedule = [];
    this.loading = false;
  }
}

let store;

export function getStore() {
  if (!store) {
    store = new globalStore();
  }

  return store;
}
