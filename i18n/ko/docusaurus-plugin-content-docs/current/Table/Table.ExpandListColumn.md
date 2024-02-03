---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


## Description

테이블의 목록 열이 지정된 경우 해당 목록의 각 값에 대해 복사본 행을 만듭니다.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Details

<code>table</code>이(가) 지정된 경우(<code>column</code>은(는) 값 목록) 목록을 각 값에 대한 행으로 분할합니다. 다른 열의 값은 새로 만들어진 각 행에 복제됩니다.


## Examples

### Example #1 
테이블의 목록 열 [Name]을 분할합니다.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
