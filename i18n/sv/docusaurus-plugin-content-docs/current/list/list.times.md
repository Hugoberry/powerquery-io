---
title: List.Times
---

# List.Times


Genererar en lista med time-värden baserat på ett ursprungligt värde, antal och inkrementellt duration-värde.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerar en lista med `time`\-värden med storleken `count` med början från `start`. Den angivna ökningen, `step`, är ett `duration`\-värde som läggs till för varje värde.


## Examples

### Example #1
Skapa en lista med 4 värden med början från klockan 12 (#time(12, 0, 0)) som ökar med en timme (#duration(0, 1, 0, 0)).
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
