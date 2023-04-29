import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Bio_Text from './Bio_Text';
import Bio_Complete from './Bio_Complete';
import User from '../../../../../assets/Images/user.png';
import User1 from '../../../../../assets/Images/user1.png';
import User2 from '../../../../../assets/Images/user2.png';
export default function Bio_List() {
  const List2 = [
    [
      User,
      'Add your name',
      'Add your full name so your friends know its you.',
      'Edit name',
    ],
  ];
  const List3 = [
    [
      User1,
      'Add your photo',
      'Choose a profile photo to reprsenet yourself on Instagram.',
      'Change photo',
    ],
  ];
  const List4 = [
    [
      User2,
      'Find people to follow',
      'Follow people and interests you care about.',
      'Find more',
    ],
  ];
  return (
    <ScrollView horizontal style={{flexDirection: 'row'}}>
      <Bio_Text />
      <Bio_Complete Card={List2} />
      <Bio_Complete Card={List3} />
      <Bio_Complete Card={List4} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
