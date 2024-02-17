/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekend {

  sunday = "Sunday",
monday = "Monday",
tuesday = "Tuesday",
wednesday = "Wednesday",
thursday = 'Thursday',
friday = "Friday",
saturday = 'Saturday'
 }; 

 function isWeekend (day: Weekend) :boolean {
  if (day === Weekend.saturday || day === Weekend.sunday) {
    return true;
  }
return false;
 }

 console.log(isWeekend(Weekend.friday))
 console.log(isWeekend(Weekend.saturday))

