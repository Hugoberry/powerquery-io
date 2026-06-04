---
title: Table.Buffer
---

# Table.Buffer


계산하는 동안 테이블을 메모리에 버퍼링하여 외부 변경으로부터 격리합니다.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

평가 중에 테이블을 외부 변경으로부터 격리하여 메모리에 테이블을 버퍼링합니다. 버퍼링은 제한적입니다. 스칼라 셀 값은 강제로 평가하지만 스칼라가 아닌 값(레코드, 목록, 표 등)은 있는 그대로 둡니다.

-   `table`: 메모리에서 버퍼링할 테이블입니다.
-   `options`: (선택 사항) 다음 옵션 레코드 값을 사용할 수 있습니다.
    -   `BufferMode`: 수행할 버퍼링 유형을 설명하는 버퍼 모드입니다. 이 옵션은 `BufferMode.Eager` 또는 `BufferMode.Delayed`일 수 있습니다.

이 함수를 사용하면 쿼리 실행 속도가 빨라질 수도 있고 그렇지 않을 수도 있습니다. 경우에 따라, 모든 데이터를 읽고 메모리에 저장하는 데 드는 추가된 비용과 버퍼링으로 인해 다운스트림 폴딩이 방지된다는 점 때문에 쿼리가 느려질 수도 있습니다. 데이터가 반드시 버퍼링될 필요는 없지만 다운스트림 폴딩만 방지하려는 경우에는 대신 `Table.StopFolding`을 사용합니다.


## Examples

### Example #1
SQL 테이블의 모든 행을 메모리에 로드하여 다운스트림 작업에서 더 이상 SQL 서버를 쿼리할 수 없도록 합니다.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
