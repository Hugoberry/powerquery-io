---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Devolve o resultado de tentar inferir funções SQL para um controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Devolve o resultado de tentar inferir funções SQL com a cadeia de ligação `connectionString` através do ODBC. `connectionString` pode ser texto ou um registo de pares de valores de propriedade. Os valores de propriedade podem ser texto ou número.


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
