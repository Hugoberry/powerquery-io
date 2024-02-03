---
title: Table.Min
---

# Table.Min


## Description

Повертає найменший рядок або значення за замовчуванням за даним критерієм.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Повертає найменший рядок у <code>table</code> за умови <code>comparisonCriteria</code>. Якщо таблиця пуста, повертається додаткове значення <code>default</code>.


## Examples

### Example #1 
Знайти в таблиці рядок із найменшим значенням у стовпці [a].
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
Знайти в таблиці рядок із найменшим значенням у стовпці [a]. Повернути -1, якщо значень немає.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
