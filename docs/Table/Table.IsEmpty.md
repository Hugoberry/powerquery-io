---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Indicates whether the table contains any rows.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Indicates whether the <code>table</code> contains any rows. Returns <code>true</code> if there are no rows (i.e. the table is empty), <code>false</code> otherwise.


## Examples

### Example #1 
Determine if the table is empty.
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
Determine if the table &lt;code&gt;(\{})&lt;/code&gt; is empty.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
