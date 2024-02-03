---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Devuelve el resultado de intentar inferir las capacidades de SQL para un controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Devuelve el resultado de intentar inferir las capacidades de SQL con la cadena de conexión <code>connectionString</code> mediante ODBC. <code>connectionString</code> puede ser un texto o un registro de pares de valores de propiedad. Los valores de propiedad pueden ser de texto o número.


## Examples

### Example #1 
Permite devolver las funcionalidades de SQL inferidas para una cadena de conexión.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
