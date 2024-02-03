---
title: List.Union
---

# List.Union


## Description

Returnerar unionen av listvärdena i dina indata.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Tar en lista med listor, <code>lists</code>, förenar objekten i de individuella listorna och returnerar dem i utdatalistan. Listan som returneras innehåller alla objekt i alla indatalistor.    Den här åtgärden bevarar traditionell dubblettsemantik och dubblettvärden matchas som en del av föreningen.    Ett valfritt ekvationsvillkorsvärde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Skapa en union av listan \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
