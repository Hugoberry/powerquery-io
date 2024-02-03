---
title: Table.SplitAt
---

# Table.SplitAt


## Description

Vrátí seznam obsahující zadané první řádky počtu a zbývající řádky.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

Vrátí seznam obsahující dvě tabulky: tabulku, která obsahuje prvních N řádků <code>table</code> (podle specifikace <code>count</code>), a tabulku, která obsahuje zbývající řádky <code>table</code>. Pokud jsou tabulky výsledného seznamu uvedeny přesně jednou a v pořadí, bude funkce provádět výčet <code>table</code> pouze jednou.


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
