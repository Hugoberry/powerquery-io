---
title: List.Range
---

# List.Range


Retorna un subconjunt de la llista que comença en un desplaçament.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Retorna un subconjunt de `list` que comença a `offset`. Un paràmetre opcional, `count`, defineix el nombre màxim d'elements del subconjunt.


## Examples

### Example #1
Troba el subconjunt que comença al desplaçament 6 de la llista de nombres de l'1 al 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2
Troba el subconjunt de longitud 2 a partir del desplaçament 6, de la llista de nombres de l'1 al 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
