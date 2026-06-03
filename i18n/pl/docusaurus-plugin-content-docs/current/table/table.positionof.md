---
title: Table.PositionOf
---

# Table.PositionOf


Zwraca pozycję/pozycje wiersza w tabeli.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Zwraca pozycję wiersza pierwszego wystąpienia funkcji `row` w określonej funkcji `table`. Zwraca -1, jeśli nie znaleziono żadnego wystąpienia.

-   `table`: Tabela wejściowa.
-   `row`: Wiersz w tabeli, którego pozycja ma zostać znaleziona.
-   `occurrence`: *(opcjonalnie)*Określa, które wystąpienie wiersza ma zostać zwrócone.
-   `equationCriteria`: *(opcjonalnie)* Steruje porównywaniem wierszy tabeli.


## Examples

### Example #1
Znajdź pozycję pierwszego wystąpienia wiersza \[a = 2, b = 4\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2
Znajdź pozycję drugiego wystąpienia wiersza \[a = 2, b = 4\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3
Znajdź pozycje wszystkich wystąpień wiersza \[a = 2, b = 4\] w tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
