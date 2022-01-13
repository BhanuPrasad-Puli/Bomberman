const bombs = [];
let gamePoints =0;

function updateGamePoints(){
    const gamePoints = document.getElementById('gamepoints');
    gamePoints.innerHTML='Game Points';

}
function addGrid(){
    const appElement = document.getElementById('app');
    for(let i=0;i<9;i++){
        const row = document.createElement("div");
        for(let j=0;j<9;j++){
            const index=i*9+j;
            const column = document.createElement('div');
            column.style.display = 'inline-block';
            column.style.width ='60px';
            column.style.height='60px';
            column.style.border='1px solid black';
            column.style.textAlign='center';
            column.style.verticalAlign='middle';
            column.setAttribute("index",index);
            column.addEventListener('click',function(){
                if(bombs.includes(index)){
                    column.style.background='red';
                   column.innerHTML='Boom';
                }
                else{
                    column.style.background='green';
                    gamePoints++;
                    updateGamePoints();
                }
            })
            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}

function generateBombs(){
    while(bombs.length!==10){
        const randomNUm = Math.floor(Math.random()*100);
        if(randomNUm<81 &&!bombs.includes(randomNUm)){
            bombs.push(randomNUm);
        }
    }
}

addGrid();
generateBombs();
console.log(bombs);