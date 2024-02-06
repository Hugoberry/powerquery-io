---
title: Table.SelectColumns
---

# Table.SelectColumns


傳回只包含指定資料行的資料表。


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

傳回只包含指定 <code>columns</code> 的 <code>table</code>。    <ul>       <li><code>table</code>: 提供的資料表。</li>       <li><code>columns</code>: 要從資料表 <code>table</code> 傳回的資料行清單。傳回資料表中的資料行會按照 <code>columns</code> 所列的順序排列。</li>       <li><code>missingField</code>: <i>(選擇性)</i> 如果資料行不存在，該如何處理。範例: <code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>。    </li></ul>


## Examples

### Example #1 
僅包含資料行 [Name]。
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
僅包含資料行 [CustomerID] 和 [Name]。
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
如果所包含的資料行不存在，則預設結果為錯誤。
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
如果所包含的資料行不存在，選項 &lt;code&gt;MissingField.UseNull&lt;/code&gt; 會建立 Null 值的資料行。
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
