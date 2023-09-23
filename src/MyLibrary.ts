// src/MyLibrary.ts

export class MyLibrary {
  private message: string;

  constructor(message: string) {
    this.message = message;
  }

  public sayHello(): string {
    return `Hello, ${this.message}!`;
  }
}
