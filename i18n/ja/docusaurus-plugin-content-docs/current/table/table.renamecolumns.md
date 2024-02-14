---
title: Table.RenameColumns
---

# Table.RenameColumns


\{old, new} という形式の名前の変更を適用します。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

指定された名前の変更をテーブル <code>table</code> の列に実行します。置換操作 <code>renames</code> は、古い列名と新しい列名という 2 つの値のリストで構成されます。これはリストで指定されます。    列が存在しない場合は、省略可能なパラメーターの <code>missingField</code> で代わりの値 (<code>MissingField.UseNull</code>、<code>MissingField.Ignore</code> など) が指定されていない限り、例外がスローされます。


## Examples

### Example #1 
テーブルの列名 &#34;CustomerNum&#34; を &#34;CustomerID&#34; に置き換えます。
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
テーブルの列名 &#34;CustomerNum&#34; を &#34;CustomerID&#34; に、列名 &#34;PhoneNum&#34; を &#34;Phone&#34; に置き換えます。
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
テーブルの列名 &#34;NewCol&#34; を &#34;NewColumn&#34; に置き換えます。列が存在しない場合は無視します。
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
