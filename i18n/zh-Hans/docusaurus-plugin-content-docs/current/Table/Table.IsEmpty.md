---
title: Table.IsEmpty
---

# Table.IsEmpty


指示表是否包含任何行。


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

指示 <code>table</code> 是否包含任何行。如果没有行(也即表为空)，则返回 <code>true</code>； 否则，返回 <code>false</code>。


## Examples

### Example #1 
确定表是否为空。
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
确定表 &lt;code&gt;(\{})&lt;/code&gt; 是否为空。
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
