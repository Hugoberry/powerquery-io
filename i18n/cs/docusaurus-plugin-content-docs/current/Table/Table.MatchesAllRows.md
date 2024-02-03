---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Značí, zda všechny řádky v tabulce splňují danou podmínku.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Značí, zda všechny řádky v tabulce <code>table</code> splňují danou podmínku <code>condition</code>. Vrátí hodnotu <code>true</code>, pokud jsou všechny řádky shodné, jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Určuje, jestli všechny hodnoty řádků ve sloupci [a] jsou i v tabulce.
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
Zjistí, zda všechny hodnoty řádků v tabulce &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; jsou [a = 1, b = 2].
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
