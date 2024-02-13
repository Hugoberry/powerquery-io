---
title: Table.Transpose
---

# Table.Transpose


列を行に、行を列にします。


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Remarks

列を行に、行を列にします。


## Examples

### Example #1 
名前/値ペアのテーブルの行を列にします。
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
