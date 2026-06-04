---
title: List.Times
---

# List.Times


Genera una llista de valors horaris a partir d'un valor inicial, d'un recompte i d'un valor de durada incremental.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Retorna una llista de valors `time` de mida `count`, que comença per `start`. L'increment donat, `step`, és un valor `duration` que se suma a tots els valors.


## Examples

### Example #1
Crea una llista de 4 valors que comencen a partir del migdia (#time(12, 0, 0)) i s'incrementen en una hora (#duration(0, 1, 0, 0)).
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
