---
title: Table.Transpose
---

# Table.Transpose


स्तंभों को पंक्तियों में और पंक्तियों को स्तंभों में बदलता है.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

स्तंभों को पंक्तियों में और पंक्तियों को स्तंभों में बदलता है.


## Examples

### Example #1 
नाम-मान युग्मों की तालिका की पंक्तियों को स्तंभों में बदलें.
```powerquery
Table.Transpose(
    Table.FromRecords({
        [Name = "Full Name", Value = "Fred"],
        [Name = "Age", Value = 42],
        [Name = "Country", Value = "UK"]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "Full Name", Column2 = "Age", Column3 = "Country"],
    [Column1 = "Fred", Column2 = 42, Column3 = "UK"]
})
```




## Category
Table.Transformation
