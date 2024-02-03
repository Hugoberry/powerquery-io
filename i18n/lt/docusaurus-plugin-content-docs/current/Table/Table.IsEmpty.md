---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Nurodoma, ar lentelėje yra eilučių.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Nurodoma, ar <code>table</code> yra eilučių. Pateikiama <code>true</code>, jei eilučių nėra (t. y. lentelė yra tuščia); priešingu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Nustatykite, ar lentelė yra tuščia.
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
Nustatykite, ar lentelė &lt;code&gt;(\{})&lt;/code&gt; yra tuščia.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
