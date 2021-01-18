/* import constansts */
import strings from '../../locales/strings';

const keys = {
  email: 'email',
  text: 'text',
  password: 'password',
  name: 'name',
  length: 'length',
  dropdown: 'dropdown',
  object: 'object',
  cast: 'cast',
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

export const addEditWebseriesFormFields = (config) => [
  {
    label: strings.name,
    key: keys.name,
    type: keys.text,
    max: 100,
    required: [true, strings.thisfieldisrequired],
  },
  {
    label: strings.length,
    key: keys.length,
    type: keys.text,
    pattern: [RegExp('^(0|[1-9][0-9]*)$'), strings.numberError],
    max: 100,
    required: [true, strings.thisfieldisrequired],
  },
  {
    label: strings.cast,
    key: keys.cast,
    type: keys.dropdown,
    required: [true, strings.thisfieldisrequired],
    data: [{ titleKey: 'name1', valueKey: '1' }, { titleKey: 'name2', valueKey: '2' }],
    dataType: keys.object,
    titleKey: 'titleKey',
    valueKey: 'valueKey',
    onSelect: config.castDropdownHandler,
  },
];

export default keys;
