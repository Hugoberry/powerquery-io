---
title: Table.First
---

# Table.First


## Description

返回第一行或指定的默认值。


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

返回 <code>table</code> 的第一行，或如果表为空，则返回可选默认值 <code>default</code>。


## Examples

### Example #1 
查找表的第一行。
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
查找表 &lt;code&gt;(\{})&lt;/code&gt; 的第一行，或如果为空，则返回 [a = 0, b = 0]。
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
