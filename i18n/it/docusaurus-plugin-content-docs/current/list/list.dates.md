---
title: List.Dates
---

# List.Dates


Genera un elenco di valori date specificato un valore iniziale, un conteggio e un valore incrementale di durata.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Restituisce un elenco di valori `date` di dimensione `count`, a partire da `start`. L'incremento specificato `step` è un valore `duration` che viene aggiunto a ogni valore.


## Examples

### Example #1
Creare un elenco di 5 valori a partire dalla sera di capodanno (#date(2011, 12, 31)) con incrementi di 1 giorno (#duration(1, 0, 0, 0)).
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
