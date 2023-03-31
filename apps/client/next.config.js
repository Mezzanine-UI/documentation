const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  output: 'export',
  nx: { svgr: false },
  reactStrictMode: true,
  transpilePackages: [
    '@mezzanine-ui/core',
    '@mezzanine-ui/react',
    '@mezzanine-ui/icons',
    '@mezzanine-ui/system',
  ],
};

module.exports = withNx(nextConfig);
