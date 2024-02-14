---
title: Table.FromRows
---

# Table.FromRows


Создает таблицу из списка значений строк. Дополнительно можно указать список столбцов.


## Syntax

```powerquery
Table.FromRows(
    rows as list,
    optional columns as any
) as table
```


## Remarks

Создает таблицу из списка "<code>rows</code>", где каждый элемент списка — внутренний список, содержащий значения столбцов для одной строки. Дополнительно для "<code>columns</code>" можно указать необязательный список имен столбцов, тип таблицы или число столбцов.


## Examples

### Example #1 
Получение таблицы со столбцом [CustomerID] со значениями \{1, 2}, столбцом [Name] со значениями \{&#34;Bob&#34;, &#34;Jim&#34;} и столбцом [Phone] со значениями \{&#34;123-4567&#34;, &#34;987-6543&#34;}.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Получение таблицы со столбцом [CustomerID] со значениями \{1, 2}, столбцом [Name] со значениями \{&#34;Bob&#34;, &#34;Jim&#34;} и столбцом [Phone] со значениями \{&#34;123-4567&#34;, &#34;987-6543&#34;}, где [CustomerID] имеет числовой тип, а [Name] и [Phone] имеют текстовый тип.
```powerquery
Table.FromRows(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"}
    },
    type table [CustomerID = number, Name = text, Phone = text]
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```




## Category
Table.Table construction
