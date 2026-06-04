---
title: List.Dates
---

# List.Dates


Genera una llista de valors de data a partir d'un valor inicial, d'un recompte i d'un valor de durada incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Retorna una llista de valors `date` de mida `count`, que comença per `start`. L'increment donat, `step`, és un valor `duration` que se suma a tots els valors.


## Examples

### Example #1
Crea una llista de 5 valors que comencen amb la nit de cap d'any (#date(2011, 12, 31)) i amb increments d'1 dia (#duration(1, 0, 0, 0)).
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
