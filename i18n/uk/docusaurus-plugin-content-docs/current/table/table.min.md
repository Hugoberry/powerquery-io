---
title: Table.Min
---

# Table.Min


Повертає найменший рядок або значення за замовчуванням за даним критерієм.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Remarks

Повертає найменший рядок у `table` за умови `comparisonCriteria`. Якщо таблиця пуста, повертається додаткове значення `default`.


## Examples

### Example #1
Знайти в таблиці рядок із найменшим значенням у стовпці \[a\].
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
Знайти в таблиці рядок із найменшим значенням у стовпці \[a\]. Повернути -1, якщо значень немає.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
