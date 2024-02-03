---
title: Table.Repeat
---

# Table.Repeat


## Description

테이블의 행을 지정한 횟수만큼 반복합니다.


## Syntax

```powerquery
Table.Repeat(
    table as table,
    count as number
) as table
```


## Details

<code>table</code> 입력의 행이 지정한 대호 <code>count</code>번 반복된 테이블을 반환합니다.


## Examples

### Example #1 
테이블의 행을 두 번 반복합니다.
```powerquery
Table.Repeat(
    Table.FromRecords({
        [a = 1, b = "hello"],
        [a = 3, b = "world"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = "hello"],
    [a = 3, b = "world"],
    [a = 1, b = "hello"],
    [a = 3, b = "world"]
})
```




## Category
Table.Row operations
