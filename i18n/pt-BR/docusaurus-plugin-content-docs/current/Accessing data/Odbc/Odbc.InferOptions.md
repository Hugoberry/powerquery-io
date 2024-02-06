---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Retorna o resultado de uma tentativa de inferir as funcionalidades do SQL de um driver ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Retorna o resultado da tentativa de inferir funcionalidades do SQL com a cadeia de conexão <code>connectionString</code> usando ODBC. <code>connectionString</code> pode ser texto ou um registro dos pares de valor da propriedade. Os valores da propriedade podem ser texto ou número.


## Examples

### Example #1 
Retorna as funcionalidades SQL inferidas para uma cadeia de conexão.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
