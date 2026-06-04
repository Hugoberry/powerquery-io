---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Devolve o resultado de tentar deducir funcionalidades SQL dun controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Devolve o resultado de tentar deducir funcionalidades SQL coa cadea de conexión `connectionString` mediante ODBC. `connectionString` pode ser texto ou un rexistro de pares de valor de propiedade. Os valores de propiedade poden ser texto ou número.


## Examples

### Example #1
Devolve as funcionalidades SQL inferidas para unha cadea de conexión.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
