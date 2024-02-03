---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Udáva, či všetky riadky v tabuľke spĺňajú danú podmienku.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Udáva, či všetky riadky v tabuľke <code>table</code> spĺňajú danú podmienku <code>condition</code>. Vráti hodnotu <code>true</code>, ak sa všetky riadky zhodujú, inak vráti hodnotu <code>false</code>.


## Examples

### Example #1 
Určte, či sú v tabuľke všetky hodnoty riadkov v stĺpci [a] párne.
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
Zistite, či všetky hodnoty riadkov sú [a = 1, b = 2] v tabuľke &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
