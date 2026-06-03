---
title: Table.ContainsAny
---

# Table.ContainsAny


Angiver, om nogen af de angivne poster vises som rækker i tabellen.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Angiver, om nogen af de angivne poster på listen over poster `rows` vises som rækker i tabellen `table`. Der kan angives en valgfri parameter `equationCriteria` for at styre sammenligningen mellem rækkerne i tabellen.


## Examples

### Example #1
Find ud af, om tabellen `({[a = 1, b = 2], [a = 3, b = 4]})` indeholder rækkerne `[a = 1, b = 2]` eller `[a = 3, b = 5]`.
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
Find ud af, om tabellen `({[a = 1, b = 2], [a = 3, b = 4]})` indeholder rækkerne `[a = 1, b = 3]` eller `[a = 3, b = 5]`.
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
Find ud af, om tabellen `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` indeholder rækkerne `[a = 1, b = 3]` eller `[a = 3, b = 5]`, og sammenlign kun kolonne \[a\].
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
