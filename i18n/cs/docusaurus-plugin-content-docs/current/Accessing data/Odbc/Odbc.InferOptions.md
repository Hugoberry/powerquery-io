---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Vrací výsledek pokusu dovodit možnosti SQL pro ovladač ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Vrací výsledek pokusu dovodit možnosti SQL s připojovacím řetězcem <code>connectionString</code> s použitím ODBC. <code>connectionString</code> může být text nebo záznam párů hodnot vlastností. Hodnoty vlastností můžou být text nebo číslo.


## Examples

### Example #1 
Vrátí odvozené funkce SQL pro připojovací řetězec.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
