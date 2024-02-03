---
title: List.Generate
---

# List.Generate


## Description

Generiše listu vrednosti.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Generiše listu vrednosti pomoću obezbeđenih funkcija. Funkcija <code>initial</code> generiše početnu vrednost kandidata, koja se zatim testira u odnosu na <code>condition</code>.    Ako je vrednost kandidata odobrena, onda se ona vraća kao deo rezultujuće liste, a sledeća vrednost kandidata se generiše tako što se nova odobrena vrednost prenese na <code>next</code>.    Kada se vrednost kandidata ne podudara sa <code>condition</code>, proces generisanja liste se zaustavlja.    Takođe se može obezbediti opcionalni parametar, <code>selector</code>, kako bi se transformisale stavke na rezultujućoj listi.


## Examples

### Example #1 
Kreirajte listu počevši od deset, uzastopno smanjujući za jedan, pri čemu svaka stavka mora biti veća od nule.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generiše listu zapisa koji sadrže x i y, pri čemu x predstavlja vrednost, a y listu. x treba da bude manje od 10 i da predstavlja broj stavki na listi y. Nakon generisanja liste, vraćaju se samo vrednosti za x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
