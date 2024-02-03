---
title: Table.HasColumns
---

# Table.HasColumns


## Description

Кестенің көрсетілген баған(дар)ды қамтитынын көрсетеді.


## Syntax

```powerquery
Table.HasColumns(
    table as table,
    columns as any
) as logical
```


## Details

<code>table</code> көрсетілген баған(дар)ды (<code>columns</code>) қамтитынын көрсетеді. Кесте баған(дар)ды қамтыса, <code>true</code> мәнін, олай болмаса <code>false</code> мәнін қайтарады.


## Examples

### Example #1 
Кестеде [Name] бағанының болуын анықтау.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
true
```


### Example #2 
Кестеде [Name] және [PhoneNumber] бағандарының болуын анықтау.
```powerquery
Table.HasColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"Name", "PhoneNumber"}
)
```

Result: 
```powerquery
false
```




## Category
Table.Column operations
