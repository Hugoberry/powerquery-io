---
title: Table.SplitAt
---

# Table.SplitAt


Returnerar en lista som innehåller det första antal rader som anges och de återstående raderna.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Returnerar en lista som innehåller två tabeller: en tabell med de första N raderna i <code>table</code> (som anges av <code>count</code>) och en tabell som innehåller de återstående raderna i <code>table</code>.Om tabellerna i den resulterande listan räknas upp en gång och i ordning räknar funktionen upp <code>table</code> bara en gång.


## Examples

### Example #1 
Returnera de första två raderna i tabellen och resten av raderna i tabellen.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
