const getSleepHours = day => {
    switch(day) {
      case 'Monday':
        return 6;
      case 'Tuesday':
        return 6;
      case 'Wednesday':
        return 6;
      case 'Thursday':
        return 8;
      case 'Friday':
        return 4;
      case 'Saturday':
        return 6;
      case 'Sunday':
        return 8;
    }
  };
  
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  const getIdealSleepHours = (hoursPerDay) => {
    return hoursPerDay * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(6);
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("Too much sleep!");
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  };
  
  calculateSleepDebt();