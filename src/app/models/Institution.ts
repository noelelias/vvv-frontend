import {User} from './User';

export class Institution {

  constructor(user: User) {
    this.user = user || new User();
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get phone_number(): string {
    return this._phone_number;
  }

  set phone_number(value: string) {
    this._phone_number = value;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(value: Date) {
    this._updated_at = value;
  }

  get created_at(): Date {
    return this._created_at;
  }

  set created_at(value: Date) {
    this._created_at = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get postal_code(): number {
    return this._postal_code;
  }

  set postal_code(value: number) {
    this._postal_code = value;
  }

  get house_number(): string {
    return this._house_number;
  }

  set house_number(value: string) {
    this._house_number = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  private _id: number;
  private _name: string;
  private _street: string;
  private _house_number: string;
  private _postal_code: number;
  private _city: string;
  private _description: string;
  private _created_at: Date;
  private _updated_at: Date;
  private _user: User;
  // Add to DB
  private _phone_number: string;
}
