import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  apiServerPort: parseInt(process.env.API_SERVER_PORT, 10),
  originDomain: process.env.ORIGIN_DOMAIN,
}));
