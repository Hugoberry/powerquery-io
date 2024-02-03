---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Кіріс кестенің ұяшықтардың кемінде біреуінде қате бар жолдар ғана бар кестені қайтарады. Егер бағандар тізімі көрсетілген болса, онда тек көрсетілген бағандардағы ұяшықтарда қателер бар-жоғы тексеріледі.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Кіріс кестенің ұяшықтардың кемінде біреуінде қате бар жолдар ғана бар кестені қайтарады. Егер бағандар тізімі көрсетілген болса, онда тек көрсетілген бағандардағы ұяшықтарда қателер бар-жоғы тексеріледі.


## Examples

### Example #1 
Жолдарында қателер бар тұтынушылардың аттарын таңдаңыз.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
