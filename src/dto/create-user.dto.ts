export class CreateUserDto {
  value: {
    username: string;
    password: string;
    sex: string;
  };

  label: { username: string; password: string; sex: string };

  constructor(username: string = '', password: string = '', sex: string = '') {
    this.value = { username: username, password: password, sex: sex };
    this.label = {
      username: 'никнейм',
      password: 'пароль',
      sex: 'пол'
    };
  }
}
