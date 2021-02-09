let dogName
let dogBreed

function wakeDog(dogName, dogBreed){
    const wakeUp = `Wake ${dogName} the ${dogBreed}`
    console.log(wakeUp)
    return wakeUp
}

function leashDog(dogName, dogBreed){
    const leashUp = `Leash ${dogName} the ${dogBreed}`
    console.log(leashUp)
    return leashUp
}

function walkToPark(dogName, dogBreed){
    const walkDog = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(walkDog)
    return walkDog
}

function throwFrisbee(dogName, dogBreed){
    const throwDogFrisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(throwDogFrisbee)
    return throwDogFrisbee
}

function walkHome(dogName, dogBreed){
    const walkDogHome = `Walk home with ${dogName} the ${dogBreed}`
    console.log(walkDogHome)
    return walkDogHome
}

function unleashDog(dogName, dogBreed){
    const removeLeash = `Unleash ${dogName} the ${dogBreed}`
    console.log(removeLeash)
    return removeLeash
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed){
    const dogRoutine = []
    for ( let i = 0; i < routine.length; i++ ) {
        dogRoutine.push(routine[i](dogName,dogBreed))
    }

    return dogRoutine
}



