---
title: Table.DemoteHeaders
---

# Table.DemoteHeaders


स्तंभ शीर्षलेखों को मानों की पहली पंक्ति में अवनत करता है.


## Syntax

```powerquery
Table.DemoteHeaders(
    table as table
) as table
```


## Remarks

स्तंभ शीर्षलेखों (अर्थात् स्तंभ नाम) को मानों की पहली पंक्ति में अवनत करता है.


## Examples

### Example #1 
तालिका में मानों की पहली पंक्ति को अवनत करें.
```powerquery
Table.DemoteHeaders(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "CustomerID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Table.Column operations
