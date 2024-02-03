---
title: Table.Last
---

# Table.Last


## Description

返回最后一行或指定的默认值。


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

返回 <code>table</code> 的最后一行，或如果表为空，则返回可选默认值 <code>default</code>。


## Examples

### Example #1 
查找表的最后一行。
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
查找表 &lt;code&gt;(\{})&lt;/code&gt; 的最后一行，或如果为空，则返回 [a = 0, b = 0]。
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
