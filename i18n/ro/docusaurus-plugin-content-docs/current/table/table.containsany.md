---
title: Table.ContainsAny
---

# Table.ContainsAny


Indică dacă oricare dintre înregistrările specificate apar ca rânduri în tabel.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indică dacă oricare dintre înregistrările specificate în lista de înregistrări `rows` apar ca rânduri în `table`. Un parametru opţional `equationCriteria` poate fi specificat pentru a controla comparaţia dintre rândurile tabelului.


## Examples

### Example #1
Determinaţi dacă tabelul `({[a = 1, b = 2], [a = 3, b = 4]})` conţine rândurile `[a = 1, b = 2]` sau `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2
Determinaţi dacă tabelul `({[a = 1, b = 2], [a = 3, b = 4]})` conţine rândurile `[a = 1, b = 3]` sau `[a = 3, b = 5]`.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3
Determinaţi dacă tabelul `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` conţine rândurile `[a = 1, b = 3]` sau `[a = 3, b = 5]` comparând doar coloana \[a\].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
