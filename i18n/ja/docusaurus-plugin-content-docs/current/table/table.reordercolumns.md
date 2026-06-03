---
title: Table.ReorderColumns
---

# Table.ReorderColumns


指定された順序で列を含むテーブルを返します。


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

`columnOrder` で指定された順序で列を含むテーブルを、入力 `table` から返します。リストに指定されていない列の順序は変更されません。 列が存在しない場合は、オプションのパラメーター `missingField` で代替 (`MissingField.UseNull` または `MissingField.Ignore`) を指定しない限り、エラーが発生します。


## Examples

### Example #1
テーブルの列 \[Phone\] および \[Name\] の順序を入れ替えます。
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
テーブルの列 \[Phone\] および \[Address\] の順序を入れ替えるか、"MissingField.Ignore" を使用します。列 \[Address\] が存在しない場合は、テーブルは変更されません。
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
