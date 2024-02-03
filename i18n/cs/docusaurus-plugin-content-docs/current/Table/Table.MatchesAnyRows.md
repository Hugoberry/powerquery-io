---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Značí, zda některé řádky v tabulce splňují danou podmínku.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Značí, zda některé řádky v tabulce <code>table</code> splňují danou podmínku <code>condition</code>. Vrátí hodnotu <code>true</code>, pokud jsou některé řádky shodné, jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Určuje, zda některé hodnoty řádků ve sloupci [a] jsou i v tabulce &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Určuje, zda některé hodnoty řádků v tabulce &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; jsou [a = 1, b = 2].
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
