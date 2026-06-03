---
title: Table.RenameColumns
---

# Table.RenameColumns


\{old, new\} という形式の名前の変更を適用します。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

指定された名前の変更をテーブル `table` の列に実行します。置換操作 `renames` は、古い列名と新しい列名という 2 つの値のリストで構成され、リストで指定されます。 列が存在しない場合は、オプションのパラメーター `missingField` で代替 (`MissingField.UseNull` または `MissingField.Ignore`) を指定しない限り、エラーが発生します。


## Examples

### Example #1
テーブルの列名 "CustomerNum" を "CustomerID" に置き換えます。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
テーブルの列名 "CustomerNum" を "CustomerID" に、列名 "PhoneNum" を "Phone" に置き換えます。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
テーブルの列名 "NewCol" を "NewColumn" に置き換えます。列が存在しない場合は無視します。
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
