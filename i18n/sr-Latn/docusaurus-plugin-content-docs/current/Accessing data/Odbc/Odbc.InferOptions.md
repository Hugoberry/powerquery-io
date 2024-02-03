---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Vraća rezultat pokušaja određivanja mogućnosti SQL-a za ODBC upravljački program.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Vraća rezultat pokušaja određivanja mogućnosti SQL-a sa niskom veze <code>connectionString</code> pomoću ODBC-a. <code>connectionString</code> može da bude tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekstualne ili numeričke.


## Examples

### Example #1 
Vraćanje izvedenih SQL mogućnosti za nisku veze.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
