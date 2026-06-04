---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Pateikiamas bandymo nustatyti ODBC tvarkyklės SQL galimybes rezultatas.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Pateikiamas bandymo nustatyti SQL galimybes su jungimosi eilute `connectionString` naudojant ODBC rezultatas. `connectionString` gali būti tekstas arba ypatybės reikšmių porų įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai.


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
