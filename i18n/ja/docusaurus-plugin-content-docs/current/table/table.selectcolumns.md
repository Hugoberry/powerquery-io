---
title: Table.SelectColumns
---

# Table.SelectColumns


指定された列のみを含むテーブルを返します。


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

指定された `columns` のみを含む `table` を返します。

-   `table`: 指定されたテーブル。
-   `columns`: 返されるテーブル `table` の列のリスト。返されるテーブルの列は、`columns` のリストに出現する順序になります。
-   `missingField`: *(省略可能)* 列が存在しない場合の処理。 例: `MissingField.UseNull` または `MissingField.Ignore`。


## Examples

### Example #1
列 \[Name\] のみを含めます。
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
列 \[CustomerID\] と \[Name\] を含めます。
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
付加列が存在しない場合、既定の結果はエラーです。
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
付加列が存在しない場合、オプション `MissingField.UseNull` によって、NULL 値の列が作成されます。
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
