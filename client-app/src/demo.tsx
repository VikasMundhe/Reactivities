export interface Duck{
    name:string;
    numOfLegs:number
    makeSound:(sound:string)=> void;
}

const duck1:Duck = {
    name:'Huey',
    numOfLegs:2,
    makeSound:(sound)=>console.log(sound)
}

const duck2:Duck = {
    name:'Duey',
    numOfLegs:2,
    makeSound:(sound)=>console.log(sound + ' From Duey')
}

duck1.makeSound('Chirp');
duck2.makeSound('Roar');

export const ducks = [duck1, duck2]