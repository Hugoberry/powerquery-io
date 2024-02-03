---
title: Table.MatchesAllRows
---

# Table.MatchesAllRows


## Description

Pokazuje da li svi redovi iz tabele zadovoljavaju dati uslov.


## Syntax

```powerquery
Table.MatchesAllRows(
    table as table,
    condition as function
) as logical
```


## Details

Pokazuje da li se svi redovi iz <code>table</code> podudaraju sa datim <code>condition</code>. Vraća <code>true</code> ako se svi redovi podudaraju. U suprotnom vraća <code>false</code>.


## Examples

### Example #1 
Utvrđivanje da li su sve vrednosti redova iz kolone [a] parne u tabeli.
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
Pronalaženje da li su sve vrednosti redova [a = 1, b = 2], u tabeli &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
