/* eslint-disable no-undef */
import { makeAutoObservable } from 'mobx';
import { get, set } from '../utils/localStorage';

export class authStore {
  session = undefined;
  constructor() {
    makeAutoObservable(this);
  }

  async getCookie() {
    chrome.cookies.getAll({}, arr => {
      console.error(JSON.stringify(this));
      this.session = arr[0].value;
      console.error(this.session);
      set('session', arr[0].value);
    });
  }
}

let store;

export function getStore() {
  if (!store) {
    store = new authStore();
  }

  return store;
}
