---
title: Table.ReplaceMatchingRows
---

# Table.ReplaceMatchingRows


## Description

지정한 모든 행을 제공된 행으로 바꿉니다.


## Syntax

```powerquery
Table.ReplaceMatchingRows(
    table as table,
    replacements as list,
    optional equationCriteria as any
) as table
```


## Details

<code>table</code>에서 지정한 모든 행을 제공된 행으로 바꿉니다. 바꿀 행과 대체 행은 <code>replacements</code>에서 \{old, new} 형식으로 지정됩니다.    선택적 <code>equationCriteria</code> 매개 변수를 지정하여 테이블 행 간의 비교를 제어할 수 있습니다.


## Examples

### Example #1 
테이블에서 [a = 1, b = 2] 및 [a = 2, b = 3] 행을 [a = -1, b = -2], [a = -2, b = -3]으로 바꿉니다.
```powerquery
Table.ReplaceMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 2, b = 3],
        [a = 3, b = 4],
        [a = 1, b = 2]
    }),
    {
        {[a = 1, b = 2], [a = -1, b = -2]},
        {[a = 2, b = 3], [a = -2, b = -3]}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = -1, b = -2],
    [a = -2, b = -3],
    [a = 3, b = 4],
    [a = -1, b = -2]
})
```




## Category
Table.Membership
