---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

모든 열에 지정된 텍스트가 접두사로 추가된 테이블을 반환합니다.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

제공된 <code>table</code>의 모든 열 이름에 <code>prefix</code><code>.ColumnName</code> 형식으로 지정된 텍스트 <code>prefix</code> 및 마침표가 접두사로 추가된 테이블을 반환합니다.


## Examples

### Example #1 
테이블의 열에 &#34;MyTable&#34;을 접두사로 추가합니다.
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
