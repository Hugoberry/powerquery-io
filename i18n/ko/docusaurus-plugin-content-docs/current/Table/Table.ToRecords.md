---
title: Table.ToRecords
---

# Table.ToRecords


## Description

테이블을 레코드 목록으로 변환합니다.


## Syntax

```powerquery
Table.ToRecords(
    table as table
) as list
```


## Details

<code>table</code> 테이블을 레코드 목록으로 변환합니다.


## Examples

### Example #1 
테이블을 레코드 목록으로 변환합니다.
```powerquery
Table.ToRecords(
    Table.FromRows(
        {
            {1, "Bob", "123-4567"},
            {2, "Jim", "987-6543"},
            {3, "Paul", "543-7890"}
        },
        {"CustomerID", "Name", "Phone"}
    )
)
```

Result: 
```powerquery
{
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
}
```




## Category
Table.Conversions
