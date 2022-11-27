const graph1 = document.getElementById("graph1");
const graph2 = document.getElementById("graph2");
let bargap = 40;
let g1width = Math.floor(graph1.clientWidth / bargap);

const generateGraph = (graph, col) => {
    for (i = 0; i <= g1width; i++) {
        const bars = document.createElement("div");
        bars.classList.add("bar");
        bars.innerHTML = `<div class="b"><div class="br ${col}"></div><div class="ball"></div><div class="line ${col}"></div></div><p class="lower">13:${i}</p>`;
        const elem = bars.getElementsByClassName("b")[0];
        elem.style = `--height: ${i * 10 + '%'}`;
        graph.appendChild(bars)
    }

    const lines = graph.querySelectorAll(".line");
    const bars = graph.querySelectorAll(".b");
    for (i = 0; i <= bars.length; i++) {
        let h1 = bars[i].clientHeight;
        if(bars[i+1] != undefined){
            let h2 = bars[i + 1].clientHeight;
            let diff = h1 > h2 ? h1 - h2 : h2 - h1;
            let hypo = Math.sqrt(Math.pow(diff, 2) + Math.pow(bargap, 2));
            let angle = Math.floor(Math.asin(diff / hypo) * (180 / Math.PI) + 1);
            let finalAngle = h1 > h2 ? angle : '-' + angle;
            console.log(finalAngle)
            lines[i].style = `--width: ${hypo}px`;
            lines[i].style.transform = `rotate(${finalAngle}deg)`;
        }else{
            return null;
        }
    }

}

generateGraph(graph1, 'blu');
generateGraph(graph2, 'grn');


const count = document.getElementById("counter");
const count1 = document.getElementById("counter1");
const count2 = document.getElementById("counter2");
let j = 0;
const run = (fin, elem) => {
    setInterval(() => {
        elem.textContent = j;
        if(j==fin){
            return
        }else{
            j++;
        }
    }, 10);
}

run(45, count)
// run(78, count1)
// run(100, count2)