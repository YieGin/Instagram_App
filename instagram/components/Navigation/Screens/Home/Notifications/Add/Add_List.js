import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Add_Text from './Add_Text';
import Image1 from '../../../../../../assets/Images/15.jpg';
import Image2 from '../../../../../../assets/Images/16.jpg';
import Image3 from '../../../../../../assets/Images/17.jpg';
import Image4 from '../../../../../../assets/Images/18.jpg';
import Image5 from '../../../../../../assets/Images/19.jpg';
import Image6 from '../../../../../../assets/Images/21.jpg';
import Image7 from '../../../../../../assets/Images/22.jpg';
import Image8 from '../../../../../../assets/Images/23.jpg';
import Image9 from '../../../../../../assets/Images/4.jpg';
import Image10 from '../../../../../../assets/Images/2.jpg';
import Image11 from '../../../../../../assets/Images/3.jpg';
import Add_Text_blue from './Add_Text_blue';
import Comment from './Comment';

export default function Add_List() {
  // Following_List

  const Following_List = [
    [Image1, 'yasin.elbakh', 'started following you. 3d', 'Following'],
  ];
  const Following_List_1 = [
    [
      Image2,
      'yasin.investor_._maxwell',
      'started following you. 1w',
      'Following',
    ],
  ];
  const Following_List_2 = [
    [Image3, 'Issac_ha', 'started following you. 2w', 'Following'],
  ];
  const Following_List_3 = [
    [
      Image4,
      'x_sak sak',
      'is on Instagram Kumou_250 and 8 others alo follow them. 2w',
      'Follow',
    ],
  ];
  const Following_List_4 = [
    [
      Image7,
      'issac_ha',
      'is on Instagram asmar_250 and 2 others also follow them. 3w',
      'Follow',
    ],
  ];
  const Following_List_5 = [
    [
      Image8,
      'ni ssou.34',
      'is on Instagram 93_swe and 4 others also follow them. 4w',
      'Follow',
    ],
  ];
  const Following_List_6 = [
    [
      Image9,
      'So Ram',
      'From your contacts, is on Instagram as soram8125. 4w',
      'Follow',
    ],
  ];

  // Comments List

  const Comments_1 = [
    [Image5, 'Jairr.c', 'mentioned you in a comment: @belamri_yie. 3w', Image6],
  ];
  const Comments_2 = [
    [Image5, 'Jairr.c', 'liked your comment: @jairr.c sorry. 3w', Image6],
  ];
  return (
    <View style={{rowGap: 20}}>
      <Add_Text Card={Following_List} />
      <Add_Text Card={Following_List_1} />
      <Add_Text Card={Following_List_2} />
      <Add_Text_blue Card={Following_List_3} />
      <Comment Card={Comments_1} />
      <Comment Card={Comments_2} />
      <Add_Text_blue Card={Following_List_4} />
      <Add_Text_blue Card={Following_List_5} />
      <Add_Text_blue Card={Following_List_6} />
    </View>
  );
}

const styles = StyleSheet.create({});
