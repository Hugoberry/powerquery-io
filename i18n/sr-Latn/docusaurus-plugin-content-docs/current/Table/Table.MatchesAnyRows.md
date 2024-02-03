---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Pokazuje da li bilo koji red iz tabele zadovoljava dati uslov.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Pokazuje da li se bilo koji red iz <code>table</code> podudara sa datim <code>condition</code>. Vraća <code>true</code> ako se bilo koji red podudara. U suprotnom vraća <code>false</code>.


## Examples

### Example #1 
Utvrđivanje da li je bilo koja vrednost reda iz kolone [a] parna u tabeli &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Utvrđivanje da li je bilo koja vrednost reda [a = 1, b = 2], u tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
