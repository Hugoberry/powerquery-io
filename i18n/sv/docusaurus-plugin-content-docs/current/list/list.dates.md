---
title: List.Dates
---

# List.Dates


Genererar en lista med date-värden baserat på ett ursprungligt värde, antal och inkrementellt duration-värde.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerar en lista med <code>date</code>-värden med storleken <code>count</code> med början från <code>start</code>. Den angivna ökningen, <code>step</code>, är ett <code>duration</code>-värde som läggs till för varje värde.


## Examples

### Example #1 
Skapa en lista med 5 värden med början på nyårsafton (#date(2011, 12, 31)) och öka med 1 dag (#duration(1, 0, 0, 0)).
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
