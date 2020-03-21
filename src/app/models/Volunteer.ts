import {User} from './User';

export class Volunteer {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get radius(): number {
    return this._radius;
  }

  set radius(value: number) {
    this._radius = value;
  }

  get driving_license(): boolean {
    return this._driving_license;
  }

  set driving_license(value: boolean) {
    this._driving_license = value;
  }

  get medical_experience(): number {
    return this._medical_experience;
  }

  set medical_experience(value: number) {
    this._medical_experience = value;
  }

  get time_from(): number {
    return this._time_from;
  }

  set time_from(value: number) {
    this._time_from = value;
  }

  get date_to(): Date {
    return this._date_to;
  }

  set date_to(value: Date) {
    this._date_to = value;
  }

  get date_form(): Date {
    return this._date_form;
  }

  set date_form(value: Date) {
    this._date_form = value;
  }

  static ENDPOINT_PATH = '/endpoints/volunteer';

  private _id: number;
  private _date_form: Date;
  private _date_to: Date;
  private _time_from: number;
  private time_to: number;
  private _radius: number;
  private _driving_license: boolean;
  private _medical_experience: number;

}
