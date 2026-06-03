---
title: Table.ContainsAny
---

# Table.ContainsAny


Geeft aan of willekeurig welke van de opgegeven records als rijen in de tabel worden weergegeven.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Geeft aan of willekeurig welke van de opgegeven records in de lijst met records `rows` als rijen in de `table` worden weergegeven. Er kan een optionele parameter `equationCriteria` worden opgegeven voor het aansturen van de vergelijking tussen de rijen van de tabel.


## Examples

### Example #1
Bepalen of de tabel `({[a = 1, b = 2], [a = 3, b = 4]})` de rij `[a = 1, b = 2]` of `[a = 3, b = 5]` bevat.
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
Bepalen of de tabel `({[a = 1, b = 2], [a = 3, b = 4]})` de rij `[a = 1, b = 3]` of `[a = 3, b = 5]` bevat.
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
Bepalen of de tabel `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` de rij `[a = 1, b = 3]` of `[a = 3, b = 5]` bevat, waarbij alleen de kolom \[a\] wordt vergeleken.
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
