import { Controller } from 'egg';

// add user controller and service
declare module 'egg' {
  interface IController {
    foo: FooController;
  }
}

// controller
export default class FooController extends Controller {
  async getData() {
    this.ctx.body = await this.ctx.service.foo.bar();
  }
  async getBar() {
    this.ctx.body = await this.service.foo.bar();
  }
}
