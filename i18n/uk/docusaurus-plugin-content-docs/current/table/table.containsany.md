---
title: Table.ContainsAny
---

# Table.ContainsAny


Визначає, чи відображається будь-який із вказаних записів таблиці у вигляді рядка.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Визначає, чи відображається будь-який із вказаних записів у списку записів `rows` у `table` у вигляді рядка. Можна вказати додатковий параметр `equationCriteria` для керування порівнянням рядків таблиці.


## Examples

### Example #1
Визначити, чи містяться в таблиці `({[a = 1, b = 2], [a = 3, b = 4]})` рядки `[a = 1, b = 2]` або `[a = 3, b = 5]`.
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
Визначити, чи містяться в таблиці `({[a = 1, b = 2], [a = 3, b = 4]})` рядки `[a = 1, b = 3]` або `[a = 3, b = 5]`.
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
Визначити, чи містяться в таблиці `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` рядки `[a = 1, b = 3]` або `[a = 3, b = 5]`, порівнюючи лише стовпець \[a\].
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
