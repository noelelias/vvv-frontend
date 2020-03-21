export class User {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get forename(): string {
    return this._forename;
  }

  set forename(value: string) {
    this._forename = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  private _id: number;
  private _surname: string;
  private _forename: string;
  private _email: string;
}
