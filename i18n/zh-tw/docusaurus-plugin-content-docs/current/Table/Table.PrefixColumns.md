---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

傳回資料表，其中所有資料行前面都已經加上指定的文字。


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

傳回資料表，其中來自所提供之 <code>table</code> 的所有資料行名稱前面都以 <code><code>prefix</code>.ColumnName</code> 的格式加上指定的文字 <code>prefix</code> 與句號。


## Examples

### Example #1 
在資料表中的資料行前面加上 &#34;mytable&#34;。
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
