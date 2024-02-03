---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Retorna el resultat de provar d&#39;inferir les capacitats d&#39;SQL per a un controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Retorna el resultat de provar d'inferir les capacitats d'SQL amb la cadena de connexió <code>connectionString</code> mitjançant ODBC. <code>connectionString</code> pot ser text o un registre de parells de propietat i valor. Els valors de propietat poden ser un text o números.


## Examples

### Example #1 
Retorna les capacitats d&#39;SQL inferides per a una cadena de connexió.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
