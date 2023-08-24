const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const backgroundColor = [   '#ffbf00', '#00ff40', '#00ffbf', '#00bfff', '#8000ff', 
                            '#ff00ff', '#ff0080', '#e2e8f0', '#4b5563', '#525252', 
                            '#57534e', '#fecaca', '#fed7aa', '#ca8a04', '#365314',
                            '#bbf7d0', '#115e59', '#164e63', '#bae6fd', '#dbeafe', 
                            '#ddd6fe', '#581c87', '#831843', '#fb7185', '#a78bfa'];

const borderColor =     [   '#ff8000', '#80ff00', '#00ff80', '#00ffff', '#0080ff', 
                            '#0040ff', '#bf00ff', '#334155', '#d1d5db', '#52525b', 
                            '#78716c', '#7f1d1d', '#9a3412', '#713f12', '#ecfccb',
                            '#16a34a', '#134e4a', '#0284c7', '#ecfeff', '#1e3a8a',
                            '#a78bfa', '#f5d0fe', '#fce7f3', '#e11d48', '#fae8ff'];

const changeOne = () => {
    document.getElementById("box1").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box1").style.borderColor = borderColor[getRandomInt(25)]
}

const changeTwo = () => {
    document.getElementById("box2").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box2").style.borderColor = borderColor[getRandomInt(25)]
}

const changeThree = () => {
    document.getElementById("box3").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box3").style.borderColor = borderColor[getRandomInt(25)]
}

const changeAll = () => {
    document.getElementById("box1").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box1").style.borderColor = borderColor[getRandomInt(25)]
    document.getElementById("box2").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box2").style.borderColor = borderColor[getRandomInt(25)]
    document.getElementById("box3").style.background = backgroundColor[getRandomInt(25)]
    document.getElementById("box3").style.borderColor = borderColor[getRandomInt(25)]
}

const resetAll = () => {
    document.getElementById("box1").style.background = '#dc2626'
    document.getElementById("box1").style.borderColor = '#09090b'
    document.getElementById("box2").style.background = '#4338ca'
    document.getElementById("box2").style.borderColor = '#fde047'
    document.getElementById("box3").style.background = '#bef264'
    document.getElementById("box3").style.borderColor = '#e879f9'
}
