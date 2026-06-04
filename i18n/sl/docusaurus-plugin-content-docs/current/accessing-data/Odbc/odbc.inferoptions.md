---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Vrne rezultat poskusa določanja zmogljivosti strežnika SQL za gonilnik ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Vrne rezultat poskusa določanja zmogljivosti strežnika SQL z nizom povezave `connectionString`, ki uporablja ODBC. `connectionString` je lahko besedilo ali zapis para vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali številka.


## Examples

### Example #1
Pridobite zmogljivosti SQL, ki so na voljo za niz povezave.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
