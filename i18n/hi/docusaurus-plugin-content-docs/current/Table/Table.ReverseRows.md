---
title: Table.ReverseRows
---

# Table.ReverseRows


## Description

उलटे क्रम में पंक्तियों के साथ एक तालिका लौटाता है.


## Syntax

```powerquery
Table.ReverseRows(
    table as table
) as table
```


## Details

इनपुट <code>table</code> से उलटे क्रम में पंक्तियों के साथ एक तालिका लौटाता है.


## Examples

### Example #1 
तालिका की पंक्तियों को उलटा करें.
```powerquery
Table.ReverseRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"]
})
```




## Category
Table.Row operations
