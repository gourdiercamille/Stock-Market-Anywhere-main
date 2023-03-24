var default_prices = {
    //"cuv" : {"initial_price" : 3.5, "krach_price" : 0.7, "min_price" : 0.4, "full_name":"Cuvée des Trolls "},
    "bar" : {"initial_price" : 1.5, "krach_price" : 1, "min_price" : 0.6, "full_name":"Barbar"},
    "cho" : {"initial_price" : 2.5, "krach_price" : 2, "min_price" : 2, "full_name":"Chouffe"},
    "duv" : {"initial_price" : 2.5, "krach_price" : 1.6, "min_price" : 1.5, "full_name":"Duvel"},
    "trk" : {"initial_price" : 2.5, "krach_price" : 2, "min_price" : 1.8, "full_name":"Triple K"},
    "cmy" : {"initial_price" : 2.5, "krach_price" : 1.6, "min_price" : 1.5, "full_name":"Chimay"},
    "cnt" : {"initial_price" : 0.75, "krach_price" : 0.6, "min_price" : 0.6, "full_name":"Canette"},
    "kaa" : {"initial_price" : 2.0, "krach_price" : 1.1, "min_price" : 0.9, "full_name":"Kaastel Triple"},
    "gou" : {"initial_price" : 1.5, "krach_price" : 1.15, "min_price" : 1, "full_name":"Goudale"},
    "pel" : {"initial_price" : 0.75, "krach_price" : 0.6, "min_price" : 0.6, "full_name":"Pelforth"},
    "morr" : {"initial_price" : 1.0, "krach_price" : 0.9, "min_price" : 0.9, "full_name":"Mordue Rouge"},
    "lef" : {"initial_price" : 1.1, "krach_price" : 0.8, "min_price" : 0.8, "full_name":"Leffe"},
    "des" : {"initial_price" : 1.1, "krach_price" : 1, "min_price" : 1, "full_name":"Despe"},
    "mor" : {"initial_price" : 1.7, "krach_price" : 0.9, "min_price" : 0.9, "full_name":"Mordue"},
    "pec" : {"initial_price" : 2.5, "krach_price" : 2, "min_price" : 2, "full_name":"Peche Mel"},
    "cor" : {"initial_price" : 1.5, "krach_price" : 1, "min_price" : 1,"full_name":"Corona"},
    "pin" : {"initial_price" : 2, "krach_price" : 1, "min_price" : 0.6, "full_name":"Pinte Sangria"},
    "Pbln" : {"initial_price" : 3.5, "krach_price" : 3, "min_price" : 2, "full_name":"Pinte Blonde"},
    "Prg" : {"initial_price" : 2.5, "krach_price" : 1.7, "min_price" : 1.5, "full_name":"Pinte Rouge"},
}

compteur = 0
number_of_drinks =  Object.keys(default_prices).length
for(let i in default_prices){
    if(!default_prices[i]["colour"]){
        default_prices[i]["colour"] = "hsl(" + Math.ceil(compteur * 360 / (number_of_drinks+1)) + ", 90%, 60%)";
    }
    compteur += 1
}
