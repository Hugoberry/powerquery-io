---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Génère une liste de valeurs datetimezone en fonction d&#39;une valeur initiale, d&#39;un nombre et d&#39;une valeur de durée incrémentielle.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Retourne une liste de valeurs <code>datetimezone</code> de taille <code>count</code>, démarrant par <code>start</code>. L'incrément spécifié, <code>step</code>, est une valeur <code>duration</code> qui est ajoutée à chaque valeur.


## Examples

### Example #1 
Crée une liste de 10 valeurs démarrant 5 minutes avant le 1er jour de la nouvelle année (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) par incréments de 1 minute (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
