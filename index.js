const inventory = newInventory();
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif');
let direction = null;
let x = 100;
let y = 250;


function handleDirectionChange(direction) {
if(direction === null){
    character.src = 'assets/green-character/static.gif'
}
else if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
else if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
else if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
else if(direction === 'south'){
    character.src = 'assets/green-character/south.gif'
}
}

function movewithArrowKeys(left, bottom, callback){
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        callback(direction);
    });
    
    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction);
    });
    
}

function moveCharacter() {
if(direction === 'west'){
    x = x - 1;
}
if(direction === 'north'){
    y = y + 1;
}
if(direction === 'east'){
    x = x + 1;
}
if(direction === 'south'){
    y = y - 1;
}
character.style.left = x + 'px';
character.style.bottom = y + 'px';
}

movewithArrowKeys(100, 250, handleDirectionChange);
setInterval(moveCharacter, 100);





move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)