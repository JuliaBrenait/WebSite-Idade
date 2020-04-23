var idade = prompt("Me diga sua idade!");

if(idade >= 0 && idade < 15){
    document.write("<h3>Para crianças de 0 a 5 anos, o recomendado é 2h de atividade física por dia. Já para crianças de 6 a 15 anos o recomendado é 1h por dia!</h3>")
} else if(idade >=15 && idade <30){
    document.write("<h3>Para jovens, a atividade física de alta intensidade precisa ser realizada pelo menos 1h por dia!</h3>")
} else if(idade >= 30 && idade<60){
    document.write("<h3>Para adultos, a atividade aeróbica deve ser realizada em períodos de pelo menos 10 minutos de duração. Fortalecendo os principais musculos. </h3>")
} else{
    document.write("<h3>Para idosos, fazer pelo menos 150 minutos de atividade física aeróbia de intensidade moderada durante a semana ou pelo menos 75 minutos de atividade física aeróbica intensa durante a semana ou uma combinação equivalente de atividade de intensidade moderada e vigorosa.</h3>")
}

