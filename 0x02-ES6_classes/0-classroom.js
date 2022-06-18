/* eslint no-underscore-dangle: ["error", {"allow": ["_maxStudentsSize"] }] */

export default class Classroom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
