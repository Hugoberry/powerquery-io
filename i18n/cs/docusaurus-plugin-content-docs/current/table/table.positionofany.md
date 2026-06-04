---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Vrátí pozici nebo pozice libovolných zadaných řádků tabulky.


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

Vrátí pozice řádků z tabulky `table` pro první výskyt seznamu `rows`. Pokud nebyl nalezen žádný výskyt, vrátí hodnotu -1.

-   `table`: Vstupní tabulka.
-   `rows`: Seznam řádků v tabulce, jejichž pozice se mají hledat.
-   `occurrence`: *(Volitelné)* Určí, které výskyty řádku se mají vrátit.
-   `equationCriteria`: *(Volitelné)* Řídí porovnávání mezi řádky tabulky.


## Examples

### Example #1
Umožňuje najít pozici prvního výskytu \[a = 2, b = 4\] nebo \[a = 6, b = 8\] v tabulce `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Umožňuje najít pozici všech výskytů \[a = 2, b = 4\] nebo \[a = 6, b = 8\] v tabulce `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
