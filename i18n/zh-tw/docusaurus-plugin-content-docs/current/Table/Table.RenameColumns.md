---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

套用 \{old, new} 格式的重新命名。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

針對資料表 <code>table</code> 中的資料行執行指定的重新命名。取代作業 <code>renames</code> 是由兩個值的清單組成，舊的資料行名稱與新的資料行名稱 (以清單的形式提供)。    如果資料行不存在，就會擲回例外狀況，除非選擇性參數 <code>missingField</code> 指定了替代方案 (例如 <code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
以 &#34;CustomerID&#34; 取代資料表中的資料行名稱 &#34;CustomerNum&#34;。
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
以 &#34;CustomerID&#34; 取代資料表中的資料行名稱 &#34;CustomerNum&#34;，並以 &#34;Phone&#34; 取代 &#34;PhoneNum&#34;。
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
以 &#34;NewColumn&#34; 取代資料表中的資料行名稱 &#34;NewCol&#34;，如果資料行不存在，則忽略。
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
