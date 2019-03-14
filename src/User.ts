export class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public say(): void {
    console.log(this.name)
  }
}
