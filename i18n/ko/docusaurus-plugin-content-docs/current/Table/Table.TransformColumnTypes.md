---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

특정 문화권을 사용하여 \{ column, type } 형식의 형식 변환을 적용합니다.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

<code>culture</code> 선택적 매개 변수에 지정된 문화권(예: "en-US")을 기준으로 <code>typeTransformations</code> 매개 변수(\{ column name, type name} 형식)에 지정된 열에 변환 작업을 적용하여 <code>table</code> 입력에서 테이블을 반환합니다.    열이 없는 경우 예외가 발생합니다.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; 테이블에서 [a] 열의 숫자 값을 텍스트 값으로 변환합니다.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
