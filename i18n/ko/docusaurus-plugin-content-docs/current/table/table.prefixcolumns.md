---
title: Table.PrefixColumns
---

# Table.PrefixColumns


모든 열에 지정된 텍스트가 접두사로 추가된 테이블을 반환합니다.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Remarks

제공된 `table`의 모든 열 이름에 `prefix.ColumnName` 형식으로 지정된 텍스트 `prefix` 및 마침표가 접두사로 추가된 테이블을 반환합니다.


## Examples

### Example #1
테이블의 열에 "MyTable"을 접두사로 추가합니다.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
