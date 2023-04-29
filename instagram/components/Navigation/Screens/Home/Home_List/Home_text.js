import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home_List from '.';
import Home_Video_List from '../Home_Video_List';
// Import Vidoes
import Video_1 from '../../../../../assets/videos/1.mp4';
import Video_2 from '../../../../../assets/videos/2.mp4';
import Video_3 from '../../../../../assets/videos/3.mp4';
import Video_4 from '../../../../../assets/videos/4.mp4';
import Video_5 from '../../../../../assets/videos/5.mp4';
// Import Images
import Image_2 from '../../../../../assets/Images/2.jpg';
import Image_3 from '../../../../../assets/Images/3.jpg';
import Image_4 from '../../../../../assets/Images/4.jpg';
import Image_5 from '../../../../../assets/Images/5.jpg';
import Image_6 from '../../../../../assets/Images/6.jpg';
import Image_7 from '../../../../../assets/Images/7.jpg';
import Image_8 from '../../../../../assets/Images/8.jpg';
import Image_9 from '../../../../../assets/Images/9.jpg';
import Image_10 from '../../../../../assets/Images/10.jpg';
import Image_11 from '../../../../../assets/Images/11.jpg';
import Image_12 from '../../../../../assets/Images/12.jpg';
import Image_13 from '../../../../../assets/Images/14.jpg';
import Image_14 from '../../../../../assets/Images/14.jpg';
import Image_15 from '../../../../../assets/Images/15.jpg';
import Image_16 from '../../../../../assets/Images/16.jpg';
import Image_17 from '../../../../../assets/Images/17.jpg';
import Image_18 from '../../../../../assets/Images/18.jpg';
import Image_19 from '../../../../../assets/Images/19.jpg';
import Image_20 from '../../../../../assets/Images/20.jpg';
import Image_21 from '../../../../../assets/Images/21.jpg';
import Image_22 from '../../../../../assets/Images/22.jpg';
import Image_23 from '../../../../../assets/Images/23.jpg';
import Image_24 from '../../../../../assets/Images/24.jpg';
export default function Home_text() {
  // LIST OF IMAGES_TEXT
  const Images_list3 = [
    [
      Image_3,
      'miranowhere',
      '. 2h',
      Image_2,
      '1,037 likes',
      'everyday is earth day ☘️ more planting on next stream twitch.tv/mira',
    ],
  ];
  const Images_list2 = [
    [
      Image_4,
      'millionaire.aesthetic_',
      '. 10h',
      Image_4,
      '1,485 likes',
      'Are you scared about AI or do you think it’s good?',
    ],
  ];
  const Images_list = [
    [
      Image_5,
      'jennierubyjane',
      '. 6h',
      Image_6,
      '3,303,717 likes',
      'week 1 festivities 😎',
    ],
  ];
  const Images_list4 = [
    [
      Image_7,
      'computersciencelife',
      '. 2w',
      Image_8,
      '8,134 likes',
      'I still have hope 😍👨‍💻 Follow us @computersciencelife for such more posts related to programming and technology',
    ],
  ];
  const Images_list5 = [
    [
      Image_5,
      'jennierubyjane',
      '. 6h',
      Image_12,
      '2,887,717 likes',
      'Let me hear yu fuckin scream coachellaaaaaaa 🤍',
    ],
  ];
  const Images_list6 = [
    [
      Image_19,
      'sarcastic_us',
      '. 3d',
      Image_20,
      '887,717 likes',
      'The real risk taker. 💀',
    ],
  ];
  const Images_list7 = [
    [
      Image_21,
      'setuputic',
      '. 1w',
      Image_22,
      '8,717 likes',
      '😁Do you agree with Setup in the bedroom❓',
    ],
  ];
  const Images_list8 = [
    [
      Image_23,
      'retrojapan._',
      '. 1w',
      Image_24,
      '35,717 likes',
      'DragonballForever 🤍🤍',
    ],
  ];
  // LIST OF VIDOES
  const Images_list_Video1 = [
    [
      Image_4,
      'themermaidscales',
      '. 15h',
      Image_10,
      Video_1,
      '187,285 likes',
      'Future flash 🎥',
    ],
  ];
  const Images_list_Video2 = [
    [
      Image_9,
      'zacharylaid',
      '. 2w',
      Image_11,
      Video_2,
      '203,185 likes',
      'Apologizing for everything is the right way to avoid drama coz now a days all human beings want is attention and then can do anything',
    ],
  ];
  const Images_list_Video3 = [
    [
      Image_13,
      'coding_comedy',
      '. 10w',
      Image_14,
      Video_3,
      '20,455 likes',
      'You will catch me red handed using it light & 😇',
    ],
  ];
  const Images_list_Video4 = [
    [
      Image_15,
      'catzproud',
      '. 4m',
      Image_16,
      Video_4,
      '20,455 likes',
      'Kittyss',
    ],
  ];
  const Images_list_Video5 = [
    [
      Image_17,
      'tech_wizzdom',
      '. 4m',
      Image_18,
      Video_5,
      '20,455 likes',
      'Follow @javascript_wizz for more tech content',
    ],
  ];
  return (
    <View style={{paddingBottom: 100}}>
      <Home_List Card={Images_list} />
      <Home_List Card={Images_list2} />
      <Home_Video_List Card={Images_list_Video1} />
      <Home_List Card={Images_list3} />
      <Home_List Card={Images_list4} />
      <Home_Video_List Card={Images_list_Video2} />
      <Home_List Card={Images_list5} />
      <Home_Video_List Card={Images_list_Video3} />
      <Home_Video_List Card={Images_list_Video4} />
      <Home_Video_List Card={Images_list_Video5} />
      <Home_List Card={Images_list6} />
      <Home_List Card={Images_list7} />
      <Home_List Card={Images_list8} />
    </View>
  );
}

const styles = StyleSheet.create({});
