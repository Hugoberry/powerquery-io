---
title: Table.ContainsAny
---

# Table.ContainsAny


Nurodoma, ar kurie nors nurodyti įrašai lentelėje rodomi kaip eilutė.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Nurodoma, ar kurie nors nurodyti įrašai įrašų sąraše `rows` rodomi kaip eilutės `table`. Galima nurodyti pasirenkamą parametrą `equationCriteria`, norint valdyti lentelės eilučių palyginimą.


## Examples

### Example #1
Nustatykite, ar lentelėje `({[a = 1, b = 2], [a = 3, b = 4]})` yra eilutės `[a = 1, b = 2]` arba `[a = 3, b = 5]`.
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
Nustatykite, ar lentelėje `({[a = 1, b = 2], [a = 3, b = 4]})` yra eilutės `[a = 1, b = 3]` arba `[a = 3, b = 5]`.
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
Nustatykite, ar lentelėje `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` yra eilutės `[a = 1, b = 3]` arba `[a = 3, b = 5]`, lygindami tik stulpelį \[a\].
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
