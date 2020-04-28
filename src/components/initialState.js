import { v4 } from 'uuid';

const id1 = v4();
const id2 = v4();

export default {
  masterTicketList: {
    [id1]: {
      username: 'Muffins',
      title: 'I miss friends.',
      body: 'Will you all be my Reddit friends since real ones will give me the Rona?',
      date: 'dummy-string',
      upvotes: 0,
      downvotes: 0,
      id: id1
    },
    [id2]: {
      username: 'Banana',
      title: 'My kid is video chatting his class....',
      body: '... right next to me, so I am going to be quiet for a little bit.',
      date: 'dummy-string',
      upvotes: 0,
      downvotes: 0,
      id: id2
    }
  }
}

