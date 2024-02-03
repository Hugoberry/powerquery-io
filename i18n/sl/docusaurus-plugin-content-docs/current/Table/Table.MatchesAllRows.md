---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Označuje, ali vse vrstice v tabeli izpolnjujejo dani pogoj.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Označuje, ali vse vrstice v tabeli <code>table</code> ustrezajo danemu pogoju <code>condition</code>. Vrne <code>true</code>, če vse vrstice ustrezajo pogoju, sicer vrne <code>false</code>.


## Examples

### Example #1 
Ugotovite, ali so vse vrednosti vrstic v stolpcu [a] soda števila v tabeli.
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
Ugotovite, ali so vse vrednosti vrstic [a = 1, b = 2] v tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
