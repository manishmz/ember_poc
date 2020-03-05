import { readOnly } from '@ember/object/computed';
import { Ability } from 'ember-can';

export default Ability.extend({
  hasPermission: true,
  canCreate: readOnly('hasPermission')
});