import Oauth2 from 'torii/providers/oauth2-code';
import { configurable } from 'torii/configuration';

export default Oauth2.extend({
  name: 'meetup-oauth2',
  baseUrl: 'https://secure.meetup.com/oauth2/authorize',

  requiredUrlParams: ['state'],
  responseParams: ['code'],

  state: 'STATE',

  redirectUri: configurable('redirectUri', function () {
    return this._super();
  })
});
