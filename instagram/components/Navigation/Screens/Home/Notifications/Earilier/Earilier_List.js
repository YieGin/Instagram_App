import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Earilier_Text from './Earilier_Text';
import Image1 from '../../../../../../assets/Images/12.jpg';
import Image2 from '../../../../../../assets/Images/9.jpg';
import Image3 from '../../../../../../assets/Images/2.jpg';
import Image4 from '../../../../../../assets/Images/22.jpg';
import Add_Text_blue from '../Add/Add_Text_blue';
export default function Earilier_List() {
  const Earilier_List = [
    [Image1, 'Moa, Coiffeur Vip 34', 'and others shared 20 photos. 5w'],
  ];
  const Earilier_List1 = [
    [Image1, 'Moa, Zikkuo', 'and others shared 22 photos. 5w'],
  ];
  const Earilier_List2 = [
    [Image1, 'Moa, Lmokh', 'and others shared 22 photos. 5w'],
  ];
  const Earilier_List3 = [
    [Image1, 'Moa, Mimo Tipoo', 'and others shared 23 photos. 5w'],
  ];
  const Earilier_List4 = [
    [Image1, 'Moa, Mimo Tipoo', 'and others shared 20 photos. 5w'],
  ];
  const Earilier_List5 = [
    [Image2, 'Mimo Tipoo, Mahsun', 'and others shared 24 photos. 5w'],
  ];
  const Earilier_List6 = [
    [Image3, 'mira anna, Yeas', 'and others shared 18 photos. 6w'],
  ];
  const Earilier_List7 = [
    [Image1, 'Moa, LMokh', 'and others shared 21 photos. 6w'],
  ];
  const Earilier_List8 = [
    [Image1, 'Moa, LMokh', 'and others shared 22 photos. 6w'],
  ];
  const Earilier_List9 = [
    [Image1, 'Moa, LMokh', 'and others shared 25 photos. 6w'],
  ];
  const Earilier_List10 = [
    [Image1, 'Moa, LMokh', 'and others shared 22 photos. 7w'],
  ];
  const Following_List_1 = [
    [
      Image4,
      'Zikou_19',
      'Followed babdenoor on Instagram. See Their posts. 7w',
      'Follow',
    ],
  ];
  const Following_List_2 = [
    [
      Image4,
      'babdenoor',
      'is on Instagram Zikou_19 and 2 others alow follow them. 7w',
      'Follow',
    ],
  ];

  return (
    <View style={{rowGap: 20}}>
      <Earilier_Text Card={Earilier_List} />
      <Earilier_Text Card={Earilier_List1} />
      <Earilier_Text Card={Earilier_List2} />
      <Earilier_Text Card={Earilier_List3} />
      <Earilier_Text Card={Earilier_List4} />
      <Earilier_Text Card={Earilier_List5} />
      <Earilier_Text Card={Earilier_List6} />
      <Earilier_Text Card={Earilier_List7} />
      <Earilier_Text Card={Earilier_List8} />
      <Earilier_Text Card={Earilier_List9} />
      <Earilier_Text Card={Earilier_List10} />
      <Add_Text_blue Card={Following_List_1} />
      <Add_Text_blue Card={Following_List_2} />
    </View>
  );
}

const styles = StyleSheet.create({});
