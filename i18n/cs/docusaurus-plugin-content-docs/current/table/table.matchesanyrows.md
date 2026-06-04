---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


Značí, zda některé řádky v tabulce splňují danou podmínku.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Remarks

Značí, zda některé řádky v tabulce `table` splňují danou podmínku `condition`. Vrátí hodnotu `true`, pokud jsou některé řádky shodné, jinak vrátí hodnotu `false`.


## Examples

### Example #1
Určuje, zda některé hodnoty řádků ve sloupci \[a\] jsou i v tabulce `({[a = 2, b = 4], [a = 6, b = 8]})`.
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 3, b = 8]
    }),
    each Number.Mod([a], 2) = 0
)
```

Result: 
```powerquery
false
```


### Example #2
Určuje, zda některé hodnoty řádků v tabulce `({[a = 1, b = 2], [a = 3, b = 4]})` jsou \[a = 1, b = 2\].
```powerquery
Table.MatchesAnyRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = -3, b = 4]
    }),
    each _ = [a = 1, b = 2]
)
```

Result: 
```powerquery
true
```




## Category
Table.Row operations
