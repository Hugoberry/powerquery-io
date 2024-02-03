---
title: Table.Max
---

# Table.Max


## Description

Повертає найбільший рядок або значення за замовчуванням за даним критерієм.


## Syntax

```powerquery
Table.Max(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

Повертає найбільший рядок у <code>table</code> за умови <code>comparisonCriteria</code>. Якщо таблиця пуста, повертається додаткове значення <code>default</code>. 


## Examples

### Example #1 
Знайти рядок із найбільшим значенням у стовпці [a] у таблиці &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8]})&lt;/code&gt;.
```powerquery
Table.Max(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 6, b = 8]
```


### Example #2 
Знайти рядок із найбільшим значенням у стовпці [a] у таблиці &lt;code&gt;(\{})&lt;/code&gt;. Повернути -1, якщо значень немає.
```powerquery
Table.Max(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
