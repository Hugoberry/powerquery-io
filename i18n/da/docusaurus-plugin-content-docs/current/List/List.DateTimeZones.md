---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Opretter en liste over værdier af typen datetimezone med en indledende værdi for værdi, antal og stigende varighed.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Returnerer en liste over værdier af typen <code>datetimezone</code> i størrelsen <code>count</code> og med start ved <code>start</code>. Den angivne stigning, <code>step</code>, er en værdi af typen <code>duration</code>, der lægges til alle værdier.


## Examples

### Example #1 
Opret en liste over 10 værdier med start ved 5 minutter før nytårsdag (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) med en stigning på 1 minut (#duration(0, 0, 1, 0)).
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
