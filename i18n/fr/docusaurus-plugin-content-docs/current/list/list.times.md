---
title: List.Times
---

# List.Times


Génère une liste de valeurs time en fonction d&#39;une valeur initiale, d&#39;un nombre et d&#39;une valeur de durée incrémentielle.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Retourne une liste de valeurs <code>time</code> de taille <code>count</code>, en commençant par <code>start</code>. L'incrément spécifié, <code>step</code>, est une valeur <code>duration</code> qui est ajoutée à chaque valeur.


## Examples

### Example #1 
Crée une liste de 4 valeurs en commençant à midi (#time(12, 0, 0)) par incréments de 1 heure (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
