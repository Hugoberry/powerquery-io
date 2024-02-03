---
title: Table.Split
---

# Table.Split


## Description

指定のテーブルを、指定のページ サイズを使ったテーブルのリストに分割します。


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Details

<code>table</code> をテーブルのリストに分割します。リストの最初の要素は、ソース テーブルの  から最初の <code>pageSize</code> 行含むテーブルです。リストの次の要素は、ソース テーブルの次の <code>pageSize</code> 行を含むテーブルです。以下同様。


## Examples

### Example #1 
5 つのレコードのテーブルを、レコードを 2 つずつ含むテーブルに分割します。
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
