---
title: List.Average
---

# List.Average


Retourne la moyenne des valeurs. Fonctionne avec les valeurs de nombre, de date, datetime, datetimezone et de durée.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retourne la valeur moyenne des éléments dans la liste, <code>list</code>. Le résultat est fourni dans le même datatype que les valeurs dans la liste. Fonctionne uniquement avec les valeurs de nombre, de date, d'heure, datetime, datetimezone et de durée.    Si la liste est vide la valeur NULL est retournée.


## Examples

### Example #1 
Recherche la moyenne de la liste de numéros, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Recherche la moyenne des valeurs de date : 1er janvier 2011, 2 janvier 2011 et 3 janvier 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
