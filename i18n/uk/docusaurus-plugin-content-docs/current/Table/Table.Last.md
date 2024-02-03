---
title: Table.Last
---

# Table.Last


## Description

Повертає останній рядок або вказане значення за замовчуванням.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Повертає останній рядок у <code>table</code> або додаткове значення за замовчуванням, <code>default</code>, якщо таблиця пуста.


## Examples

### Example #1 
Знайти останній рядок таблиці.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Знайти останній рядок таблиці &lt;code&gt;(\{})&lt;/code&gt; або повернути [a = 0, b = 0] у разі пустої таблиці.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
