---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Genera un elenco di valori datetimezone specificato un valore iniziale, un conteggio e un valore incrementale di durata.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Restituisce un elenco di valori <code>datetimezone</code> di dimensione <code>count</code>, a partire da <code>start</code>. L'incremento specificato <code>step</code> è un valore <code>duration</code> che viene aggiunto a ogni valore.


## Examples

### Example #1 
Creare un elenco di 10 valori a partire da 5 minuti prima del primo dell&#39;anno (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) con incrementi di 1 minuto (#duration(0, 0, 1, 0)).
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
