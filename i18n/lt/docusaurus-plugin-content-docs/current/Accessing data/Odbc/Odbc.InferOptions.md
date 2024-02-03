---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Pateikiamas bandymo nustatyti ODBC tvarkyklės SQL galimybes rezultatas.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Pateikiamas bandymo nustatyti SQL galimybes su jungimosi eilute <code>connectionString</code> naudojant ODBC rezultatas. <code>connectionString</code> gali būti tekstas arba ypatybės reikšmių porų įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai.


## Examples

### Example #1 
Jungimosi eilutės numanomų SQL galimybių pateikimas.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
