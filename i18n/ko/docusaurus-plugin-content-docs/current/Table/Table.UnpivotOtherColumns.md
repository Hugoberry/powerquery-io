---
title: Table.UnpivotOtherColumns
---

# Table.UnpivotOtherColumns


## Description

지정한 집합 이외의 모든 열을 특성-값 쌍으로 변환합니다.


## Syntax

```powerquery
Table.UnpivotOtherColumns(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

지정한 집합 이외의 모든 열을 각 행의 나머지 값으로 결합된 특성-값 쌍으로 변환합니다.


## Examples

### Example #1 
지정한 집합 이외의 모든 열을 각 행의 나머지 값으로 결합된 특성-값 쌍으로 변환합니다.
```powerquery
Table.UnpivotOtherColumns(
    Table.FromRecords({
        [key = "key1", attribute1 = 1, attribute2 = 2, attribute3 = 3],
        [key = "key2", attribute1 = 4, attribute2 = 5, attribute3 = 6]
    }),
    {"key"},
    "column1",
    "column2"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "key1", column1 = "attribute1", column2 = 1],
    [key = "key1", column1 = "attribute2", column2 = 2],
    [key = "key1", column1 = "attribute3", column2 = 3],
    [key = "key2", column1 = "attribute1", column2 = 4],
    [key = "key2", column1 = "attribute2", column2 = 5],
    [key = "key2", column1 = "attribute3", column2 = 6]
})
```




## Category
Table.Column operations
