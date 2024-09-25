import topics from '../contents/topics';

export function getAllTopics() {
  return topics;
}

export function getAllTopicIds() {
  return topics.map((topic) => ({
    params: {
      id: topic.id,
    },
  }));
}

export function getTopicData(id) {
  return topics.find((t) => t.id === id);
}
