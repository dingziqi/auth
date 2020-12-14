const base64 = require('base-64');
const { camelCase } = require('change-case');

function getAuthInfo(authorizationInfo = '') {
  try {
    const [type, credentials] = authorizationInfo.split(' ');
    let info;

    switch (camelCase(type)) {
      case 'basic': {
        info = base64.decode(credentials);
        break;
      }
      default: {
        info;
      }
    }

    return { type, info };
  } catch (err) {
    return { type: null, info: 'invaid authorization' };
  }
}

module.exports = getAuthInfo;
