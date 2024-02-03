---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Указывает, появляются ли все указанные записи в виде строк в таблице.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Указывает, появляются ли все записи, указанные в списке записей <code>rows</code>, в виде строк в <code>table</code>.    Для управления сравнением строк таблицы может быть указан необязательный параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Определение, содержит ли таблица все строки, путем сравнения только столбца [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Определение, содержит ли таблица все строки.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
