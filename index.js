require('@tensorflow/tfjs');
const toxicity = require('@tensorflow-models/toxicity');


//set threshold
const threshold = 0.9;

toxicity.load(threshold).then(model => {
      const sentences = ["you suck, blonde, person of color, BLACK, Moron, You jackass!,bonehead,Nigger, Bitch, Jackass"];

    model.classify(sentences).then(predictions => {
        console.log(JSON.stringify(predictions[1]));;
    })
})
