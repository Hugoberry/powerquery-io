---
title: List.Durations
---

# List.Durations


Genera un elenco di valori duration dato un valore iniziale, un conteggio e un valore incrementale di durata.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Restituisce l'elenco dei valori `duration` `count` , a partire da `start` e con incrementi in base al valore `duration` specificato `step`.


## Examples

### Example #1
Creare un elenco di 5 valori a partire da 1 ora e con incrementi di un'ora.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
