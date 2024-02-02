---
title: List.DateTimes
---

# List.DateTimes


## Description

Génère une liste de valeurs datetime en fonction d&#39;une valeur initiale, d&#39;un nombre et d&#39;une valeur de durée incrémentielle.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Retourne une liste de valeurs <code>datetime</code> de taille <code>count</code>, démarrant par <code>start</code>. L'incrément spécifié, <code>step</code>, est une valeur <code>duration</code> qui est ajoutée à chaque valeur.


## Examples

### Example #1 
Crée une liste de 10 valeurs démarrant 5 minutes avant le 1er jour de la nouvelle année (#datetime(2011, 12, 31, 23, 55, 0)) par incréments de 1 minute (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
