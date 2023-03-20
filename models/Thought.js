const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp),
    },
    username: {
        type: String,
        required: true
      },
      reactions: [reactionSchema]
    }, {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
})

const dateFormat = timestamp => {
    return new Date(timestamp).toLocaleString();
  };