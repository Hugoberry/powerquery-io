---
title: Table.Combine
---

# Table.Combine


## Description

Возвращает таблицу, полученную в результате объединения списка таблиц.


## Syntax

```powerquery
Table.Combine(
    tables as list,
    optional columns as any
) as table
```


## Details

Возвращает таблицу, полученную в результате объединения списка таблиц, <code>tables</code>. Результирующая таблица будет иметь тип структуры строк, определяемой <code>columns</code> или объединением типов входных данных, если <code>columns</code> не указан.


## Examples

### Example #1 
Объединение трех таблиц.
```powerquery
Table.Combine({
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[CustomerID = 2, Name = "Jim", Phone = "987-6543"]}),
    Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Объединение трех таблиц с разными структурами.
```powerquery
Table.Combine({
    Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
    Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
    Table.FromRecords({[Cell = "543-7890"]})
})
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Phone = "123-4567", Fax = null, Cell = null],
    [Name = null, Phone = "838-7171", Fax = "987-6543", Cell = null],
    [Name = null, Phone = null, Fax = null, Cell = "543-7890"]
})
```


### Example #3 
Объединение двух таблиц и проекция на заданный тип.
```powerquery
Table.Combine(
    {
        Table.FromRecords({[Name = "Bob", Phone = "123-4567"]}),
        Table.FromRecords({[Fax = "987-6543", Phone = "838-7171"]}),
        Table.FromRecords({[Cell = "543-7890"]})
    },
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = null, Name = "Bob"],
    [CustomerID = null, Name = null],
    [CustomerID = null, Name = null]
})
```




## Category
Table.Row operations
