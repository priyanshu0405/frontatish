import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableNativeFeedback,
} from 'react-native';
// eslint-disable-next-line import/no-unresolved
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useColors } from '../../themes';
import { ColorType } from '../../common/types';
import DropList from './DropList';
import Line from './Line';

interface DropdownProps {
  dropItems: Array<string>;
  active: number;
  onChange: (index: number) => void;
}

const Dropdown = (props: DropdownProps) => {
  const animateRotate = useRef(new Animated.Value(0)).current;
  const [open, setOpen] = useState(false);
  const { dropItems, active, onChange } = props;
  const Colors = useColors();
  const styles = getStyles(Colors);
  const handleList = () => {
    Animated.timing(animateRotate, {
      toValue: open ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };
  const onItemClick = (index: number) => {
    onChange(index);
    handleList();
  };
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handleList}>
        <View style={styles.activeItem}>
          <Text style={{ color: Colors.font_2 }}>{dropItems[active]}</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Animated.View
              style={[
                // styles.caret,
                {
                  // flex: 1,
                  // alignItems: 'flex-end',
                  transform: [
                    {
                      rotate: animateRotate.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '180deg'],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Icon
                name="keyboard-arrow-down"
                size={20}
                color={Colors.primary}
              />
            </Animated.View>
          </View>
        </View>
      </TouchableNativeFeedback>
      {!open && <Line />}
      {open && (
        <DropList items={dropItems} active={active} onItemClick={onItemClick} />
      )}
    </View>
  );
};

const getStyles = (Colors: ColorType) => {
  return StyleSheet.create({
    container: { margin: 20, position: 'relative' },
    activeItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    caret: {
      width: 0,
      height: 0,
      borderLeftWidth: 6,
      borderRightWidth: 6,
      borderBottomWidth: 12,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: Colors.primary,
    },
  });
};

export default Dropdown;
