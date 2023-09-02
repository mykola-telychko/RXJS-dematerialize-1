import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/dematerialize
// Example 1: Converting notifications to values

//emit next and error notifications
const srcObsNotification$ = from([
  Notification.createNext('sucess!'),
  Notification.createError('error!'),
]).pipe(
  //turn notification objects into notification values
  dematerialize()
);

const subscription = srcObsNotification$.subscribe({
  next: (val) => console.log(`NEXT VALUE: ${val}`),
  error: (val) => console.log(`ERROR VALUE: ${val}`),
});
//output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
