---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


Značí, zda všechny řádky v tabulce splňují danou podmínku.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Značí, zda všechny řádky v tabulce `table` splňují danou podmínku `condition`. Vrátí hodnotu `true`, pokud jsou všechny řádky shodné, jinak vrátí hodnotu `false`.


## Examples

### Example #1
Určuje, jestli všechny hodnoty řádků ve sloupci \[a\] jsou i v tabulce.
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
true
```


### Example #2
Zjistí, zda všechny hodnoty řádků v tabulce `({[a = 1, b = 2], [a = 3, b = 4]})` jsou \[a = 1, b = 2\].
```powerquery
Table.MatchesAllRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
false
```




## Category
Table.Row operations
