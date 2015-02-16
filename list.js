/**
 * A list of objects, objects should be in the form:
 * {
 *   // What part of the page to capture, leave black or omit for whole page'
 *   captureSelector: '#content',
 *   // Wait for this element to load before capturing
 *   loadSelector: '#pagelet_timeline_recent',
 *   // a unique identifying name, will be used as the filename in 'out'
 *   name: 'file name',
 *   // full url of the page to capture
 *   url: 'https://www.facebook.com/'
 * }
 */

module.exports = [
  {
    captureSelector: '',
    loadSelector: '#pagelet_timeline_recent',
    name: 'What is Mark up to?',
    url: 'https://www.facebook.com/zuck'
  },
  {
    name: 'My feed: Facebook',
    url: 'https://www.facebook.com/'
  }
];
