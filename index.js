function introduction(name= 'Aki') {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name='Aki' , language= 'Ember.js') {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name= Gracie, language= 'JavaScript') {
    if (language === 'JavaScript') {
        return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    }
    if (language === 'Python') {
        return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
    }    
}

