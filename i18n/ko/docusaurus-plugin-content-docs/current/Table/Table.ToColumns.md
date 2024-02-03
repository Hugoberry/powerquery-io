---
title: Table.ToColumns
---

# Table.ToColumns


## Description

테이블에서 중첩된 열 값 목록의 목록을 만듭니다.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

<code>table</code> 테이블에서 중첩된 목록의 목록을 만듭니다. 각 목록 항목은 열 값이 포함된 내부 열입니다.


## Examples

### Example #1 
테이블의 열 값 목록을 만듭니다.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
