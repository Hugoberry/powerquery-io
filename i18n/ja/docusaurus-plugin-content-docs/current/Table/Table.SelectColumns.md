---
title: Table.SelectColumns
---

# Table.SelectColumns


## Description

指定された列のみを含むテーブルを返します。


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

指定された <code>columns</code> のみを含む <code>table</code> を返します。    <ul>       <li><code>table</code>: 指定のテーブル。</li>       <li><code>columns</code>: 返されるテーブル <code>table</code> の列の一覧。返されるテーブル内の列は、<code>columns</code> に一覧表示されている順序になります。</li>       <li><code>missingField</code>: <i>(Optional)</i> 列が存在しない場合の処理。例: <code>MissingField.UseNull</code> または <code>MissingField.Ignore</code>。    </li></ul>


## Examples

### Example #1 
列 [Name] のみを含めます。
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
列 [CustomerID] と [Name] を含めます。
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
付加列が存在しない場合、オプション &lt;code&gt;MissingField.UseNull&lt;/code&gt; によって、NULL 値の列が作成されます。
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
