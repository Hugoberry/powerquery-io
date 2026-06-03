---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Zwraca pozycję/pozycje dowolnego z określonych wierszy w tabeli.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca pozycje wierszy od elementu `table` pierwszego wystąpienia na liście `rows`. Zwraca wartość -1, jeśli nie znaleziono żadnego wystąpienia.

-   `table`: Tabela wejściowa.
-   `rows`: Lista wierszy w tabeli, których pozycje mają zostać znalezione.
-   `occurrence`: *(opcjonalnie)*Określa, które wystąpienie wiersza ma zostać zwrócone.
-   `equationCriteria`: *(opcjonalnie)* Steruje porównywaniem wierszy tabeli.


## Examples

### Example #1
Znajdź pozycję pierwszego wystąpienia wiersza \[a = 2, b = 4\] lub \[a = 6, b = 8\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2
Znajdź pozycje wszystkich wystąpień wiersza \[a = 2, b = 4\] lub \[a = 6, b = 8\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
