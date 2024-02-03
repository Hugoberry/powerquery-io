---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Devolve o resultado de tentar deducir funcionalidades SQL dun controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Devolve o resultado de tentar deducir funcionalidades SQL coa cadea de conexión <code>connectionString</code> mediante ODBC. <code>connectionString</code> pode ser texto ou un rexistro de pares de valor de propiedade. Os valores de propiedade poden ser texto ou número.


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
