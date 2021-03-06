---
id: radiobutton
title: RadioButton
sidebar_label: RadioButton
---

Radio buttons helps to implement selection between multiple options, on the low level it uses `TouchableOpacity` of React-Native

<div className="image-horizontal-preview">
    <figure>
      <img src="/frontatish/img/radio_1.png" alt="checkbox" width="250"/>
    </figure>
    <figure>
      <img src="/frontatish/img/radio_2.png" alt="checkbox" width="250"/>
    </figure>
</div>

## Usage

```jsx
import { RadioButton } from 'frontatish';

<RadioButton
  value="selected"
  onPress={() => void}
  selected={true}
/>;
```

## Props

### value

The value of radio button

|           Type            |         Default         |        Required        |
| :-----------------------: | :---------------------: | :--------------------: |
| string <img width="500"/> | None <img width="500"/> | Yes <img width="500"/> |

### selected

Flag which helps to mark radio button selected or not

|            Type            |         Default          |        Required        |
| :------------------------: | :----------------------: | :--------------------: |
| boolean <img width="500"/> | false <img width="500"/> | Yes <img width="500"/> |

### onPress

Callback function which sets the selected value in the parent state

|            Type             |        Default         |        Required        |
| :-------------------------: | :--------------------: | :--------------------: |
| function <img width="500"/> | None<img width="500"/> | Yes <img width="500"/> |

### size

you can control the size of the checkbox and the icon inside by using this props

|                   Type                    |         Default         |       Required        |
| :---------------------------------------: | :---------------------: | :-------------------: |
| enum('sm', 'md', 'lg') <img width="500"/> | 'sm' <img width="500"/> | No <img width="500"/> |

### disabled

Flag to decide whether to disable the press on radio button or not

|            Type            |         Default          |       Required        |
| :------------------------: | :----------------------: | :-------------------: |
| boolean <img width="500"/> | false <img width="500"/> | No <img width="500"/> |

### disabledStyle

Coming soon!!

### containerStyle

A react native View style object which gives flexibility to alter the styles of radio-button container

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| ViewStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |

### labelStyle

A react native Text style object which gives flexibility to alter the styles of label of the radio-button

|             Type             |         Default         |       Required        |
| :--------------------------: | :---------------------: | :-------------------: |
| TextStyle <img width="500"/> | none <img width="500"/> | No <img width="500"/> |
