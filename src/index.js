import bootstrap from './bootstrap';
import lib from './lib';
import { update } from './config';
import * as helpers from './helpers';
import ga from './directives/ga';
import vuexMiddleware from './vuex-middleware';

export default function install (app, options = {}) {
  update({ ...options, $vue: app });

  app.config.globalProperties.$ga = lib;

  bootstrap();
}

// Vuex middleware
export const analyticsMiddleware = vuexMiddleware

// Helpers
export const onAnalyticsReady = helpers.onAnalyticsReady

// Event library
export const event = lib.event
export const ecommerce = lib.ecommerce
export const set = lib.set
export const page = lib.page
export const query = lib.query
export const screenview = lib.screenview
export const time = lib.time
export const require = lib.require
export const exception = lib.exception
export const social = lib.social
