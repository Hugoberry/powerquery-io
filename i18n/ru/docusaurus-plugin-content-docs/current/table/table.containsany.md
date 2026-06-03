---
title: Table.ContainsAny
---

# Table.ContainsAny


Указывает, появляется ли любая из указанных записей в виде строки в таблице.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Указывает, появляется ли любая запись, указанная в списке записей `rows`, в виде строки в `table`. Для управления сравнением строк таблицы может быть указан необязательный параметр `equationCriteria`.


## Examples

### Example #1
Определить, содержит ли таблица `({[a = 1, b = 2], [a = 3, b = 4]})` строку `[a = 1, b = 2]` или `[a = 3, b = 5]`.
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
Определить, содержит ли таблица `({[a = 1, b = 2], [a = 3, b = 4]})` строку `[a = 1, b = 3]` или `[a = 3, b = 5]`.
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
Определить, содержит ли таблица `(Table.FromRecords({[a = 1, b = 2], [a = 3, b = 4]}))` строку `[a = 1, b = 3]` или `[a = 3, b = 5]`, сравнивая только столбец \[a\].
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
