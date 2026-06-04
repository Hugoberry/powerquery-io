---
title: Table.SplitAt
---

# Table.SplitAt


Vrátí seznam obsahující zadané první řádky počtu a zbývající řádky.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Remarks

Vrátí seznam obsahující dvě tabulky: tabulku, která obsahuje prvních N řádků `table` (podle specifikace `count`), a tabulku, která obsahuje zbývající řádky `table`. Pokud jsou tabulky výsledného seznamu uvedeny přesně jednou a v pořadí, bude funkce provádět výčet `table` pouze jednou.


## Examples

### Example #1
Vrátí první dva řádky tabulky a zbývající řádky tabulky.
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
