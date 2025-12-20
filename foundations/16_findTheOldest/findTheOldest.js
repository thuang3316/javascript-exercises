const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;
    for (person of people) {
        if (person.yearOfDeath) {
            if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
                oldestAge = person.yearOfDeath - person.yearOfBirth;
                oldestPerson = person;
            }
        } else {
            if ((new Date()).getFullYear() - person.yearOfBirth > oldestAge) {
                oldestAge = (new Date()).getFullYear() - person.yearOfBirth;
                oldestPerson = person;
            }
        }
    }
    return oldestPerson;
    
};

// Do not edit below this line
module.exports = findTheOldest;
