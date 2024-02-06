---
title: Table.ReorderColumns
---

# Table.ReorderColumns


傳回資料表，其中資料行會按照指定的順序排列。


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

根據輸入 <code>table</code> 傳回資料表，其中資料行會按照 <code>columnOrder</code> 指定的順序排列。清單中未指定之資料行將不會重新排列。     如果資料行不存在，就會擲回例外狀況，除非選擇性參數 <code>missingField</code> 指定了替代方案 (例如 <code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
切換資料表中 [Phone] 和 [Name] 資料行的順序。
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
切換資料表中 [Phone] 和 [Address] 資料行的順序或使用 &#34;MissingField.Ignore&#34;。這不會變更表格，因為 [Address] 資料行不存在。
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
