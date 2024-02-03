---
title: Table.Transpose
---

# Table.Transpose


## Description

Превращает столбцы в строки, а строки в столбцы.


## Syntax

```powerquery
Table.Transpose(
    table as table,
    optional columns as any
) as table
```


## Details

Превращает столбцы в строки, а строки в столбцы.


## Examples

### Example #1 
Превратить строки таблицы пар &#34;имя-значение&#34; в столбцы.
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
