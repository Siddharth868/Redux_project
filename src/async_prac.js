x={
    First_name:"Son",
    Last_name:"Goku"
}

function print(form,status){
    console.log(form+' '+this.First_name+' '+this.Last_name+' '+status)
}

print.apply(x,["Super Saiyan","Dead"])