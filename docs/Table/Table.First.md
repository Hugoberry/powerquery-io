---
title: Table.First
---

# Table.First


Returns the first row or a specified default value.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Returns the first row of the <code>table</code> or an optional default value, <code>default</code>, if the table is empty.


## Examples

### Example #1 
Find the first row of the table.
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
Find the first row of the table &lt;code&gt;(\{})&lt;/code&gt; or return [a = 0, b = 0] if empty.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
