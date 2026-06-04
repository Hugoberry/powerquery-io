---
title: Table.StopFolding
---

# Table.StopFolding


Деректердің бастапқы көзіне қарсы кез келген төменгі ағындағы әрекеттердің орындалуына жол бермейді.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

`table` ішіндегі деректердің бастапқы көзіне қарсы кез келген төменгі ағындағы әрекеттердің орындалуына жол бермейді.


## Examples

### Example #1
SQL кестесінен деректерді SQL серверінде сұрау ретінде кез келген төменгі ағындағы әрекеттердің орындалуына жол бермейтіндей етіп алады.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
