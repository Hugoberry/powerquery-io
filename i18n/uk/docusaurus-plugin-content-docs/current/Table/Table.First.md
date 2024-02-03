---
title: Table.First
---

# Table.First


## Description

Повертає перший рядок або вказане значення за замовчуванням.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Повертає перший рядок у <code>table</code> або додаткове значення за замовчуванням, <code>default</code>, якщо таблиця пуста.


## Examples

### Example #1 
Знайти перший рядок таблиці.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Знайти перший рядок таблиці &lt;code&gt;(\{})&lt;/code&gt; або повернути [a = 0, b = 0] у разі пустої таблиці.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
