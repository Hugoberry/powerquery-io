---
title: List.Dates
---

# List.Dates


## Description

Opretter en liste over værdier af typen date med en indledende værdi for værdi, antal og stigende varighed.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Returnerer en liste over værdier af typen <code>date</code> i størrelsen <code>count</code> og med start ved <code>start</code>. Den angivne stigning, <code>step</code>, er en værdi af typen <code>duration</code>, der lægges til alle værdier.


## Examples

### Example #1 
Opret en liste over 5 værdier med start ved nytårsaften (#date(2011, 12, 31)) med en stigning på 1 dag (#duration(1, 0, 0, 0)).
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
