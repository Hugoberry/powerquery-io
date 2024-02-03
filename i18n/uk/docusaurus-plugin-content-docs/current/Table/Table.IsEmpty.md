---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Указує, чи містить таблиця рядки.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Указує, чи таблиця <code>table</code> містить рядки. Повертає значення <code>true</code>, якщо рядків немає (тобто таблиця пуста), а в іншому випадку – значення <code>false</code> .


## Examples

### Example #1 
Визначити, чи таблиця пуста.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Визначити, чи є таблиця &lt;code&gt;(\{})&lt;/code&gt; пустою.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
