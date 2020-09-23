import dsBridge from './JSbridge.js'

export default {
  callmethod (name, data, callback) {
    callback(dsBridge.call(name, data, {msg: "callSyn"}));
  },
  registermethod (tag, callback) {
    dsBridge.register(tag, callback);
  }
}