---
title: Table.ToRows
---

# Table.ToRows


## Description

테이블에서 중첩된 행 값 목록의 목록을 만듭니다.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

<code>table</code> 테이블에서 중첩된 목록의 목록을 만듭니다. 각 목록 항목은 행 값이 포함된 내부 열입니다.


## Examples

### Example #1 
테이블의 행 값 목록을 만듭니다.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
