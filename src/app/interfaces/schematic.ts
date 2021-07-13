

export interface Schematic {
continent:string;
country:string;
population:number;
cases:{
    [key: string]:cas
};
deaths:{
    [key:string]:death

};
tests:{
[key:string]:test
};
day: string;
time: string;
}

interface cas{
new:number;
active:number;
critical:number;
recovered:number;
M_pop:string;
total:number;
}

interface death{
new:number;
M_pop:string;
total:number
}

interface test{
M_pop:string;
total:number;
}