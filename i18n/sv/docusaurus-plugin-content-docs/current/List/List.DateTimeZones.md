---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Genererar en lista med datetimezone-värden baserat på ett ursprungligt värde, antal och inkrementellt duration-värde.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Returnerar en lista med <code>datetimezone</code>-värden med storleken <code>count</code> med början från <code>start</code>. Den angivna ökningen, <code>step</code>, är ett <code>duration</code>-värde som läggs till för varje värde.


## Examples

### Example #1 
Skapa en lista med 10 värden med början 5 minuter före nyårsdagen (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) och öka med 1 minut (#duration(0, 0, 1, 0)).
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
