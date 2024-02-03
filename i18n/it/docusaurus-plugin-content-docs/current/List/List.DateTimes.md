---
title: List.DateTimes
---

# List.DateTimes


## Description

Genera un elenco di valori datetime specificato un valore iniziale, un conteggio e un valore incrementale di durata.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Restituisce un elenco di valori <code>datetime</code> di dimensione <code>count</code>, a partire da <code>start</code>. L'incremento specificato <code>step</code> è un valore <code>duration</code> che viene aggiunto a ogni valore.


## Examples

### Example #1 
Creare un elenco di 10 valori a partire da 5 minuti prima del primo dell&#39;anno (#datetime(2011, 12, 31, 23, 55, 0)) con incrementi di 1 minuto (#duration(0, 0, 1, 0)).
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
