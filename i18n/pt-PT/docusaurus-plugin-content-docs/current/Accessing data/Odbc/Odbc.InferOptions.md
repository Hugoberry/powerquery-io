---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Devolve o resultado de tentar inferir funções SQL para um controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Devolve o resultado de tentar inferir funções SQL com a cadeia de ligação <code>connectionString</code> através do ODBC. <code>connectionString</code> pode ser texto ou um registo de pares de valores de propriedade. Os valores de propriedade podem ser texto ou número.


## Examples

### Example #1 
Devolve as capacidades SQL inferidas de uma cadeia de ligação.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
