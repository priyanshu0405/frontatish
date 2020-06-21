import ButtonScreen from '../ButtonExample';
import CheckboxScreen from '../CheckboxExample';
import RadioButtonScreen from '../RadioButtonExample';
import NumPadScreen from '../NumPadExample';
import TableScreen from '../TableExample';
import PopupScreen from '../PopupExample';
import FadeScreen from '../FadeExample';
import SliderScreen from '../SliderExample';

export const COMPONENT_SCREENS = {
  BUTTON: 'Button',
  CHECKBOX: 'Checkbox',
  RADIOBUTTON: 'Radiobutton',
  NUMPAD: 'Numpad',
  TABLES: 'Tables',
  POPUP: 'Popup',
  SLIDER: 'Slider',
};

export const ANIMATED_SCREENS = { FADE: 'Fade' };

export const SCREEN_MAPPING = [
  // components screen mapping
  { name: COMPONENT_SCREENS.BUTTON, screen: ButtonScreen },
  { name: COMPONENT_SCREENS.CHECKBOX, screen: CheckboxScreen },
  { name: COMPONENT_SCREENS.RADIOBUTTON, screen: RadioButtonScreen },
  { name: COMPONENT_SCREENS.NUMPAD, screen: NumPadScreen },
  { name: COMPONENT_SCREENS.TABLES, screen: TableScreen },
  { name: COMPONENT_SCREENS.POPUP, screen: PopupScreen },
  { name: COMPONENT_SCREENS.SLIDER, screen: SliderScreen },
  // animated screen mapping
  { name: ANIMATED_SCREENS.FADE, screen: FadeScreen },
];