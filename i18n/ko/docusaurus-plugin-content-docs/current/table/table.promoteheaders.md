---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


값의 첫 번째 행을 새로운 열 머리글(즉, 열 이름)로 승격합니다.


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

값의 첫 번째 행을 새로운 열 머리글(즉, 열 이름)로 승격합니다. 기본적으로 텍스트 또는 숫자 값만 머리글로 승격됩니다. 유효한 옵션:

-   `PromoteAllScalars`: `true`로 설정하면 첫 번째 행의 모든 스칼라 값이 지정된 경우 `Culture`(또는 현재 문서 로캘)를 사용하여 헤더로 승격됩니다. 텍스트로 변환할 수 없는 값의 경우 기본 열 이름이 사용됩니다.
-   `Culture`: 데이터의 문화권을 지정하는 문화권 이름입니다.


## Examples

### Example #1
테이블에 있는 값의 첫 번째 행을 승격합니다.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
테이블의 첫 번째 행에 있는 모든 스칼라를 머리글로 승격하세요.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
