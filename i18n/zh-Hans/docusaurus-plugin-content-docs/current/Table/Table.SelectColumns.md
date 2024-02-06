---
title: Table.SelectColumns
---

# Table.SelectColumns


返回只含有指定列的表。


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

返回仅具有指定 <code>columns</code> 的 <code>table</code>。    <ul>       <li><code>table</code>: 提供的表。</li>       <li><code>columns</code>: 要返回的表 <code>table</code> 中列的列表。返回表中的列按 <code>columns</code> 中列出的顺序。</li>       <li><code>missingField</code>: <i>(可选)</i> 列不存在时如何操作。示例: <code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>。    </li></ul>


## Examples

### Example #1 
只包含列 [Name]。
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
只包含列 [CustomerID] 和列 [Name]。
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
如果包含的列没有退出，则默认结果为错误。
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
如果包含的列没有退出，选项 &lt;code&gt;MissingField.UseNull&lt;/code&gt; 将创建包含 null 值的列。
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
