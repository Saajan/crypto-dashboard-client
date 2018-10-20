
import { take, select } from 'redux-saga/effects';


export default function* saga() {
  while(true) {
    yield take("SAGA");
  }
}