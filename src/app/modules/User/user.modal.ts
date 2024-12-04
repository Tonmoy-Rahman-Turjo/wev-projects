import { model, Schema } from 'mongoose';
import { TUser } from './user.interfaace';
import config from '../../config';

import bcrypt from 'bcrypt';
const UserSchama = new Schema<TUser>(
  {
    id: {
      type: String,
      require: true,
      unique: true,
    },
    password: { type: String, require: true },

    needsPasswordChange: { type: Boolean, default: false },
    role: { type: String, enum: ['admin', 'faculty', 'student'] },

    status: {
      type: String,
      enum: ['in-progress', 'block'],
      default: 'in-progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);
//pre save midelwair /hook: will work on creat () save()
UserSchama.pre('save', async function (next) {
  // console.log(this , 'pre hook : we well save')

  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});
//   ///post save midelwair / hook
UserSchama.post('save', function (doc, next) {
  doc.password = ' ';

  next();
});
export const User = model<TUser>('User', UserSchama);
