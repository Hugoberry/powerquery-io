---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


지정한 열을 새 레코드 값 열로 결합합니다. 각각의 레코드에는 결합된 열의 이름 및 값에 해당하는 필드 이름 및 값이 있습니다.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

지정된 `table` 열을 `newColumnName`(이)라는 새 레코드 값 열에 결합합니다. 각 레코드에는 결합된 열의 이름 및 값에 해당하는 필드 이름 및 값이 포함되어 있습니다. `options`에 대한 레코드를 지정하는 경우 다음과 같은 옵션이 제공될 수 있습니다.

-   `DisplayNameColumn`: 텍스트로 지정하는 경우 지정된 열 이름을 레코드의 표시 이름으로 처리해야 함을 나타냅니다. 이 이름이 레코드의 열 중 하나일 필요는 없습니다.
-   `TypeName`: 텍스트로 지정하는 경우 로드하는 환경에서 드라이브로 데이터를 로드하는 중에 사용할 수 있는 결과 레코드의 논리 형식 이름을 제공합니다.



## Category
Table.Transformation
