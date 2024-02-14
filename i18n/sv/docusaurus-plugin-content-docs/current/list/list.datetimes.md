---
title: List.DateTimes
---

# List.DateTimes


Genererar en lista med datetime-värden baserat på ett ursprungligt värde, antal och inkrementellt duration-värde.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerar en lista med <code>datetime</code>-värden med storleken <code>count</code> med början från <code>start</code>. Den angivna ökningen, <code>step</code>, är ett <code>duration</code>-värde som läggs till för varje värde.


## Examples

### Example #1 
Skapa en lista med 10 värden med början 5 minuter före nyårsdagen (#datetime(2011, 12, 31, 23, 55, 0)) och öka med 1 minut (#duration(0, 0, 1, 0)).
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
