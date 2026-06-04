---
title: Table.ContainsAny
---

# Table.ContainsAny


Označuje, ali je kateri od navedenih zapisov prikazan kot vrstica v tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Označuje, ali je kateri od navedenih zapisov na seznamu zapisov `rows` prikazan kot vrstica v `table`. Določite lahko izbirni parameter `equationCriteria` za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1
Ugotovite, ali tabela `({[a = 1, b = 2], [a = 3, b = 4]})` vsebuje vrstico `[a = 1, b = 2]` ali `[a = 3, b = 5]`.
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
Ugotovite, ali tabela `({[a = 1, b = 2], [a = 3, b = 4]})` vsebuje vrstico `[a = 1, b = 3]` ali `[a = 3, b = 5]`.
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
Ugotovite, ali tabela `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` vsebuje vrstico `[a = 1, b = 3]` ali `[a = 3, b = 5]`, s primerjavo le stolpca \[a\].
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
