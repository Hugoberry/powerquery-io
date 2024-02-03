---
title: Table.MatchesAnyRows
---

# Table.MatchesAnyRows


## Description

Indică dacă toate rândurile din tabel îndeplinesc condiţia dată.


## Syntax

```powerquery
Table.MatchesAnyRows(
    table as table,
    condition as function
) as logical
```


## Details

Indică dacă toate rândurile din <code>table</code> îndeplinesc <code>condition</code> dată. Returnează <code>true</code> dacă toate rândurile corespund; în caz contrar, returnează <code>false</code>.


## Examples

### Example #1 
Determinaţi dacă oricare dintre valorile pentru rând din coloana [a] sunt pare în tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
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
Determinaţi dacă oricare dintre valorile pentru rând sunt [a = 1, b = 2], în tabelul &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt;.
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
