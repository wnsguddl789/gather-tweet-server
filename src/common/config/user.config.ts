import { registerAs } from '@nestjs/config';

export default registerAs('user', () => ({
  saltPassword: process.env.SALT_PASSWORD,
}));
