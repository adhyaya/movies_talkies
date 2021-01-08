/* import constansts */
import strings from '../../locales/strings';

const keys = {
  email: 'email',
  text: 'text',
  password: 'password',
};

export const loginFormFields = () => [
  {
    label: strings.email,
    key: keys.email,
    type: keys.text,
    max: 50,
    required: [true, strings.thisfieldisrequired],
  },
  {
    label: strings.password,
    key: keys.password,
    type: keys.text,
    max: 50,
    required: [true, strings.thisfieldisrequired],
  },
];

export default keys;
