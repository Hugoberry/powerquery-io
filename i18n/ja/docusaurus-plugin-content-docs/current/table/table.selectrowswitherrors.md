---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


少なくとも 1 つのセルにエラーがある、入力テーブルの行を含むテーブルを返します。列リストを指定した場合、指定した列のセルのみ、エラーの有無が確認されます。


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

少なくとも 1 つのセルにエラーがある、入力テーブルの行を含むテーブルを返します。列リストを指定した場合、指定した列のセルのみ、エラーの有無が確認されます。


## Examples

### Example #1 
行にエラーを含む顧客の名前を選択します。
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
