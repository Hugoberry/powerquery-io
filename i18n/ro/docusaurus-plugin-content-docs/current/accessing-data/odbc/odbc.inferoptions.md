---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Returnează rezultatul încercării de a deduce capacitățile SQL pentru un driver ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Returnează rezultatul încercării de a deduce capacitățile SQL cu șirul de conexiune `connectionString`, folosind ODBC. `connectionString` poate fi text sau o înregistrare cu perechi de valori de proprietate. Valorile de proprietate pot fi text sau numere.


## Examples

### Example #1
Returnați capacitățile SQL deduse pentru un șir de conexiune.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
