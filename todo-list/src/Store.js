/**
 * Created by devSC on 2017/9/16.
 */
const STORAGE_KEY = "todos-vue.js";

export default {
  fetch() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save(items) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }
}
