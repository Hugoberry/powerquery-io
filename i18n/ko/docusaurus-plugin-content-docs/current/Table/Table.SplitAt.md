---
title: Table.SplitAt
---

# Table.SplitAt


## Description

지정된 첫 번째 개수 행과 나머지 행이 포함된 목록을 반환합니다.


## Syntax

```powerquery
Table.SplitAt(
    table as table,
    count as number
) as list
```


## Details

두 개의 테이블, 즉 <code>table</code>(<code>count</code>(으)로 지정)의 첫 N행과 나머지 <code>table</code> 행이 포함된 테이블을 포함하는 목록을 반환합니다.결과 목록의 테이블이 정확히 한 번 순서대로 열거된 경우, 함수는 <code>table</code>을(를) 한 번만 열거합니다.


## Examples

### Example #1 
테이블의 첫 두 행과 테이블의 나머지 행을 반환합니다.
```powerquery
Table.SplitAt(#table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}), 2)
```

Result: 
```powerquery
{
    #table({"a", "b", "c"}, {{1, 2, 3}, {4, 5, 6}}),
    #table({"a", "b", "c"}, {{7, 8, 9}})
}
```




## Category
Table.Row operations
