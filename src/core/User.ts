/**
 * User class
 */
export class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * say
   */
  public say(): void {
    console.log(this.name)
  }
}
