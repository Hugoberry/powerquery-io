---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Zwraca listę zawierającą określonych wierszy pierwszego zliczania i pozostałe wiersze.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Zwraca listę zawierającą dwie tabele: tabelę z pierwszymi N wierszami <code>table</code> (określonymi przez <code>count</code>) oraz tabelę zawierającą pozostałe wiersze <code>table</code>.Jeśli tabele listy wynikowej zostaną właściwie wyliczone za pierwszym razem i w odpowiedniej kolejności, funkcja wyliczy <code>table</code> tylko raz.


## Examples

### Example #1 
Zwracanie pierwszych dwóch wierszy tabeli i pozostałych wierszy tabeli.
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
