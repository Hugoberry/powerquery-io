---
title: List.DateTimes
---

# List.DateTimes


## Description

Opretter en liste over værdier af typen datetime med en indledende værdi for værdi, antal og stigende varighed.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Returnerer en liste over værdier af typen <code>datetime</code> i størrelsen <code>count</code> og med start ved <code>start</code>. Den angivne stigning, <code>step</code>, er en værdi af typen <code>duration</code>, der lægges til alle værdier.


## Examples

### Example #1 
Opret en liste over 10 værdier med start ved 5 minutter før nytårsdag (#datetime(2011, 12, 31, 23, 55, 0)) med en stigning på 1 minut (#duration(0, 0, 1, 0)).
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
