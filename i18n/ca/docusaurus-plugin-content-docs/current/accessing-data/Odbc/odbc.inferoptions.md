---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Retorna el resultat de provar d'inferir les capacitats d'SQL per a un controlador ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Retorna el resultat de provar d'inferir les capacitats d'SQL amb la cadena de connexió `connectionString` mitjançant ODBC. `connectionString` pot ser text o un registre de parells de propietat i valor. Els valors de propietat poden ser un text o números.


## Examples

### Example #1
Retorna les capacitats d'SQL inferides per a una cadena de connexió.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
