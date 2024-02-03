---
title: Table.Transpose
---

# Table.Transpose


## Description

將資料行轉成資料列，而將資料列轉成資料行。


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

將資料行轉成資料列，而將資料列轉成資料行。


## Examples

### Example #1 
將名稱/值組資料表的資料列轉成資料行。
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
