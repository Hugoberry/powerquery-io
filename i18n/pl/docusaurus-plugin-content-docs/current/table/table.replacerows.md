---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Zamienia określony zakres wierszy na dostarczone wiersze.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Zamienia określoną liczbę wierszy (`count`) w tabeli wejściowej (`table`) na określoną liczbę wierszy (`rows`), zaczynając po wierszach określonych przez parametr `offset`. Wartość parametru `rows` to lista rekordów.

-   `table`: Tabela, w której jest wykonywana operacja zamiany.
-   `offset`: Liczba wierszy, które mają zostać pominięte przed rozpoczęciem zamiany.
-   `count`: Liczba wierszy do zamiany.
-   `rows`: Lista rekordów wierszy, które mają zostać wstawione do tabeli `table` w lokalizacji określonej przez parametr `offset`.


## Examples

### Example #1
Zaczynając od pozycji 1, zamień 3 wiersze.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
