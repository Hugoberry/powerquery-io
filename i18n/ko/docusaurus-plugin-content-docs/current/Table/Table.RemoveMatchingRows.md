---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

테이블에서 지정한 행의 모든 발생을 제거합니다.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code> 테이블에서 지정한 <code>rows</code>의 모든 발생을 제거합니다.    선택적 매개 변수 <code>equationCriteria</code>을(를) 지정하여 테이블 행 간의 비교를 제어할 수 있습니다.


## Examples

### Example #1 
&lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt; 테이블에서 [a = 1]인 행을 모두 제거합니다.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
