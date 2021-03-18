/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';
import { get, set } from '../utils/localStorage';

import { auth as getAuth } from '../api/auth';
import { getUnreadMessages, getArchiveMessages } from '../api/messages';

export class globalStore {
  session = undefined;
  messages = [];
  constructor() {
    makeAutoObservable(this);

    const tempSession = get('session');
    if (tempSession) this.session = tempSession;
  }

  async auth(login, password) {
    let res;

    try {
      res = await getAuth(login, password);
    } catch (error) {
      return;
    }

    this.session = res.data.session;
    set('session', res.data.session);
  }

  async unreadMessages() {
    let res;

    try {
      res = await getUnreadMessages(this.session);
    } catch (error) {
      return;
    }

    this.messages = res.data;
  }

  async archiveMessages() {
    let res;

    try {
      res = await getArchiveMessages(this.session);
    } catch (error) {
      return;
    }

    this.messages = res.data;
  }
}

let store;

export function getStore() {
  if (!store) {
    store = new globalStore();
  }

  return store;
}
