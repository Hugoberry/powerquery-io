---
title: Table.Min
---

# Table.Min


## Description

지정된 조건을 사용하여 가장 작은 행이나 기본값을 반환합니다.


## Syntax

```powerquery
Table.Min(
    table as table,
    comparisonCriteria as any,
    optional default as any
) as any
```


## Details

<code>comparisonCriteria</code>이(가) 지정된 경우 <code>table</code>의 가장 작은 행을 반환합니다. 테이블이 비어 있으면 선택적 <code>default</code> 값이 반환됩니다.


## Examples

### Example #1 
테이블에서 [a] 열의 값이 가장 작은 행을 찾습니다.
```powerquery
Table.Min(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8]
    }),
    "a"
)
```

Result: 
```powerquery
[a = 2, b = 4]
```


### Example #2 
테이블에서 [a] 열의 값이 가장 작은 행을 찾습니다. 테이블이 비어 있으면 -1을 반환합니다.
```powerquery
Table.Min(#table({"a"}, {}), "a", -1)
```

Result: 
```powerquery
-1
```




## Category
Table.Ordering
