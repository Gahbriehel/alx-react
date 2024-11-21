// import { Map } from 'immutable';
// export default function getImmutableObject(object) {
//     return Map(object)
// }



import { Map } from 'immutable';

const getImmutableObject = (object) => Map(object);

export default getImmutableObject;