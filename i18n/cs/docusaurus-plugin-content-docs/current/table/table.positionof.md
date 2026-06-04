---
title: Table.PositionOf
---

# Table.PositionOf


Vrátí pozici nebo pozice řádku tabulky.


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

Vrátí pozici prvního výskytu řádku `row` v tabulce `table`. Pokud nebyl nalezen žádný výskyt, vrátí hodnotu -1.

-   `table`: Vstupní tabulka.
-   `row`: Řádek v tabulce, jehož pozice se mají hledat.
-   `occurrence`: *(Volitelné)* Určí, které výskyty řádku se mají vrátit.
-   `equationCriteria`: *(Volitelné)* Řídí porovnávání mezi řádky tabulky.


## Examples

### Example #1
Umožňuje najít pozici prvního výskytu \[a = 2, b = 4\] v tabulce `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Umožňuje najít pozici druhého výskytu \[a = 2, b = 4\] v tabulce `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Umožňuje najít pozici všech výskytů \[a = 2, b = 4\] v tabulce `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
