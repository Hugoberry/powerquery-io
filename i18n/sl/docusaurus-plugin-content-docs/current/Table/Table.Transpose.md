---
title: Table.Transpose
---

# Table.Transpose


## Description

Spremeni stolpce v vrstice in vrstice v stolpce.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Spremeni stolpce v vrstice in vrstice v stolpce.


## Examples

### Example #1 
Spremenite vrstice tabele parov &#34;ime-vrednost&#34; v stolpce.
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
