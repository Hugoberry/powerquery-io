---
title: Table.RenameColumns
---

# Table.RenameColumns


对格式 \{old, new} 应用重命名。


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

对表 <code>table</code> 中的列执行给定的重命名。一个替换操作 <code>renames</code> 由两个值的列表以及某个列表中提供的旧列名和新列名组成。    如果此列不存在，将引发异常，除非可选参数 <code>missingField</code> 指定备用值(例如， <code>MissingField.UseNull</code> 或 <code>MissingField.Ignore</code>)。


## Examples

### Example #1 
在表中将列名 &#34;CustomerNum&#34; 替换为 &#34;CustomerID&#34;。
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
在表中将列名 &#34;CustomerNum&#34; 替换为 &#34;CustomerID&#34;，并将 &#34;PhoneNum&#34; 替换为 &#34;Phone&#34;。
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
在表中将列名 &#34;NewCol&#34; 替换为 &#34;NewColumn&#34;，如果列不存在，则忽略。
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
