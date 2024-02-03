---
title: Table.FromRecords
---

# Table.FromRecords


## Description

レコードのリストをテーブルに変換します。


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

レコードのリスト <code>records</code> をテーブルに変換します。


## Examples

### Example #1 
レコード フィールド名を列名として使用して、レコードからテーブルを作成します。
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
型指定された列を使用してレコードからテーブルを作成し、数値の列を選択します。
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
