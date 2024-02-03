---
title: Table.Buffer
---

# Table.Buffer


## Description

계산하는 동안 테이블을 메모리에 버퍼링하여 외부 변경으로부터 격리합니다.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Details

테이블을 메모리에 버퍼링하여 평가하는 동안 외부 변경 사항으로부터 격리합니다.    버퍼링이 단순합니다. 스칼라 셀 값을 강제로 평가하지만 스칼라가 아닌 값(레코드, 목록, 테이블 등)은 있는 그대로 둡니다.    <br />    <br />    이 기능을 사용하면 쿼리가 더 빨리 실행될 수도 있고 그렇지 않을 수도 있습니다. 경우에 따라 모든 데이터를 읽고     메모리에 저장하는 추가 비용과 버퍼링이 다운스트림 폴딩을 방지한다는 사실로 인해 쿼리 실행이 더 느려질 수 있습니다. 데이터를 버퍼링할 필요는 없지만      다운스트림 접기를 방지하려면 대신 <code>Table.StopFolding</code>을 사용하세요.


## Examples

### Example #1 
모든 다운스트림 작업이 더 이상 SQL Server를 쿼리할 수 없도록 SQL 테이블의 모든 행을 메모리에 로드합니다.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
