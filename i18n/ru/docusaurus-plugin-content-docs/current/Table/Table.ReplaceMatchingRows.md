---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

Заменяет все указанные строки предоставленными строками.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

Заменяет все указанные строки в <code>table</code> предоставленными строками. Строки, которые необходимо заменить, и сами замены определяются в <code>replacements</code> с использованием формата \{old, new}.    Для управления сравнением строк таблицы может быть указан необязательный параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Замена в таблице строк [a = 1, b = 2] и [a = 2, b = 3] на [a = -1, b = -2], [a = -2, b = -3].
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
