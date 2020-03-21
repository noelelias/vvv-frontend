import {User} from '../models/User';

export default abstract class BaseService {
  protected _all: Array<any> = [];
  protected _current: any;


  get all(): Array<any> {
    return this._all;
  }

  set all(value: Array<any>) {
    this._all = value;
  }

  get current(): any {
    return this._current;
  }

  set current(value: any) {
    this.pushToAll(value);
    this._current = this.findById(value.id);
  }

  protected pushToAll(value: any) {
    this._all.push(value);
    return this;
  }

  protected findById(id: number) {
    return this.all.find((entry) => {
      return entry.id === id;
    });
  }
}
