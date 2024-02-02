---
title: List.Dates
---

# List.Dates


## Description

Génère une liste de valeurs date en fonction d&#39;une valeur initiale, d&#39;un nombre et d&#39;une valeur de durée incrémentielle.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Retourne une liste de valeurs <code>date</code> de taille <code>count</code>, démarrant par <code>start</code>. L'incrément spécifié, <code>step</code>, est une valeur <code>duration</code> qui est ajoutée à chaque valeur.


## Examples

### Example #1 
Crée une liste de 5 valeurs démarrant la veille du 1er jour de l&#39;année (#date(2011, 12, 31)) par incréments de 1 jour(#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
