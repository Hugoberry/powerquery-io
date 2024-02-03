---
title: Table.RowCount
---

# Table.RowCount


## Description

テーブル内の行の数を返します。


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

<code>table</code> 内の行の数を返します。


## Examples

### Example #1 
テーブル内の行の数を調べます。
```powerquery
Table.RowCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information