---
title: Table.ReplaceRows
---

# Table.ReplaceRows


## Description

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


## Details

Zamienia określoną liczbę wierszy (<code>count</code>) w tabeli wejściowej (<code>table</code>) na określoną liczbę wierszy (<code>rows</code>), zaczynając po wierszach określonych przez parametr <code>offset</code>. Wartość parametru <code>rows</code> to lista rekordów.    <ul>       <li><code>table</code>: Tabela, w której jest wykonywana operacja zamiany.</li>       <li><code>offset</code>: Liczba wierszy, które mają zostać pominięte przed rozpoczęciem zamiany.</li>       <li><code>count</code>: Liczba wierszy do zamiany.</li>       <li><code>rows</code>: Lista rekordów wierszy, które mają zostać wstawione do tabeli <code>table</code> w lokalizacji określonej przez parametr <code>offset</code>.</li>    </ul>


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
