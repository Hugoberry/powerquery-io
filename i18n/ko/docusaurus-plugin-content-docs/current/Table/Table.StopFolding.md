---
title: Table.StopFolding
---

# Table.StopFolding


## Description

데이터의 원래 소스에 대해 다운스트림 작업이 실행되지 않도록 합니다.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Details

다운스트림 작업이 <code>table</code>에 있는 데이터의 원래 소스에 대해 실행되는 것을 방지합니다.


## Examples

### Example #1 
다운스트림 작업이 SQL 서버에서 쿼리로 실행되지 않도록 하는 방식으로 SQL 테이블에서 데이터를 가져옵니다.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
