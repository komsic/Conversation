import profileLogo from '../assets/imgs/komsic.jpg';

const data = {
  organizationName: 'The Wondering Woman',
  conversations: [
    {
      type: 'twitter',
      sender: 'Zarela Reed',
      id: '7c653e08-687e-42f2-9c5b-b9a6e9ae67e2',
      title: 'WhatsApp for Business: Don\'t forget to start your free trial',
      body: 'Hello guys, I have been unable to make use of',
      time: '19hrs',
      haveAttachment: false,
      newNotification: 2,
      filter: 'open'
    },
    {
      type: 'whatsapp',
      sender: 'Ava Gregoraci',
      id: 'fac6488d-228c-45a3-89ac-f9bb1b636003',
      title: 'Used Electronic Test Equipment Not Wor…',
      body: 'Hello guys, I have been unable to make use of',
      time: '19hrs',
      haveAttachment: true,
      newNotification: 0,
      filter: 'open'
    },
    {
      type: 'apple',
      sender: 'Iruka Akuchi',
      id: '63d84fc9-ad36-472c-bbd6-a5de8bb3a606',
      title: 'Used Electronic Test Equipment Not Wor…',
      body: 'Hello guys, I have been unable to make use of',
      time: '19hrs',
      haveAttachment: true,
      newNotification: 0,
      filter: 'open'
    },
    {
      type: 'twitter',
      sender: 'Charles Davies',
      id: '9b9301f1-6ac2-4317-b2fa-663a7cd4de8f',
      title: 'Used Electronic Test Equipment Not Wor…',
      body: 'Hello guys, I have been unable to make use of',
      time: '19hrs',
      haveAttachment: false,
      newNotification: 0,
      filter: 'open'
    },
    {
      type: 'apple',
      sender: 'Kari Granleese',
      id: '41324939-8287-4c52-8924-b4666ea255ad',
      title: 'Used Electronic Test Equipment Not Wor…',
      body: 'Hello guys, I have been unable to make use of',
      time: '19hrs',
      haveAttachment: false,
      newNotification: 0,
      filter: 'open'
    },
  ],
  messages: [
    {
      parentId: '7c653e08-687e-42f2-9c5b-b9a6e9ae67e2',
      id: 'd9e1c247-00c0-467c-a12a-64faba4c0ba7',
      author: 'Zarela Reed',
      body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy, I’m talking about after the infant is brought home from the hospital. It’s always the same thing, by the time they have their third child they have it all figured out, but with number one it’s a learning thing.',
      time: '12:59 PM',
      receipt: 'read',
    },
    {
      parentId: 'fac6488d-228c-45a3-89ac-f9bb1b636003',
      id: '41324939-8287-4c52-8924-b4666ea255ad',
      author: 'Zarela Reed',
      body: 'map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).',
      time: '12:59 PM',
      receipt: 'read',
    },
    {
      parentId: 'fac6488d-228c-45a3-89ac-f9bb1b636003',
      id: '62b7172b-98b5-48d3-8b04-11c1fd6cdb7e',
      author: 'Aruh Shan',
      body: 'By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a number of different ways.',
      time: '12:59 PM',
      receipt: 'read',
    },
  ],
  comments: [
    {
      parentId: 'd9e1c247-00c0-467c-a12a-64faba4c0ba7',
      id: '43f008cf-fb80-42c8-9e56-d7fb2235c7ff',
      image: profileLogo,
      body: 'Having a baby can be a nerve wracking experience for new parents – not the nine months of pregnancy.',
    },
    {
      parentId: 'd9e1c247-00c0-467c-a12a-64faba4c0ba7',
      id: '51667260-fc2e-4fff-8b3f-aec53eed09aa',
      image: profileLogo,
      body: 'If you\'re visiting this page, you\'re likely here because you\'re searching for a random sentence. Sometimes a random word just isn\'t enough, and that is where the random sentence generator comes into play.',
    },
    {
      parentId: '62b7172b-98b5-48d3-8b04-11c1fd6cdb7e',
      id: '32d3bf7c-ff8d-407b-b9a3-87702876c587',
      image: profileLogo,
      body: 'If you\'re visiting this page, you\'re likely here because you\'re searching for a random sentence. Sometimes a random word just isn\'t enough, and that is where the random sentence generator comes into play.',
    },
  ],
};

export default data;
