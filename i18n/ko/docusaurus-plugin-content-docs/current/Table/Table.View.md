---
title: Table.View
---

# Table.View


## Description

쿼리 및 작업 작동에 대해 사용자 정의 처리기로 테이블을 만들거나 확장합니다.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

작업이 보기에 적용되면 작업의 기본 동작 대신 <code>handlers</code>에 지정된 함수를 사용하는 <code>table</code>의 보기를 반환합니다.<br /><code>table</code>이(가) 제공되는 경우 모든 처리기 기능은 선택 사항입니다. <code>table</code>이(가) 제공되지 않으면 <code>GetType</code> 및 <code>GetRows</code> 처리기 함수가 필요합니다. 작업에 대해 처리기 함수가 지정되지 않은 경우 작업의 기본 동작이 대신 <code>table</code>에 적용됩니다(<code>GetExpression</code>의 경우 제외).<br />처리기 함수는 <code>table</code>에 대해 작업을 적용한 결과와 의미상 동일한 값을 반환해야 합니다(또는 <code>GetExpression</code> 경우의 결과 보기).<br />처리기 함수에서 오류가 발생하면 작업의 기본 동작이 보기에 적용됩니다.<br /><code>Table.View</code>는 접기를 데이터 원본에 구현, 즉 M 쿼리를 원본별 쿼리로 변환하는 데 사용될 수 있습니다(예: M 쿼리에서 T-SQL 문을 만들 경우).<br /><code>Table.View</code>에 대한 보다 완벽한 설명을 보려면 게시된 Power Query 사용자 지정 커넥터 문서를 참조하세요.<br />


## Examples

### Example #1 
형식 또는 행 개수를 결정하기 위해 행에 액세스할 필요가 없는 기본 보기를 만듭니다.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
