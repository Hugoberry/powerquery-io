---
title: List.DateTimes
---

# List.DateTimes


Genera una llista de valors d'hora i de data a partir d'un valor inicial, d'un recompte i d'un valor de durada incremental.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Retorna una llista de valors `datetime` de mida `count`, que comença per `start`. L'increment donat, `step`, és un valor `duration` que se suma a tots els valors.


## Examples

### Example #1
Crea una llista de 10 valors que comencen des de 5 minuts abans del primer dia de l'any (#datetime(2011, 12, 31, 23, 55, 0)) i s'incrementen en 1 minut (#duration(0, 0, 1, 0)).
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
