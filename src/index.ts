import {User} from "./core/User";

export function index(): void {
  const user = new User('Agreal');
  user.say();
}
