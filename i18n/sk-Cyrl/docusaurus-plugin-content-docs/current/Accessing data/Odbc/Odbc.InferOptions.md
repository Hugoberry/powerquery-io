---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Vráti výsledok pokusu o odvodenie funkcií SQL pre ovládač ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Vráti výsledok pokusu o odvodenie funkcií SQL s reťazcom pripojenia <code>connectionString</code> použitím ODBC. <code>connectionString</code> môže byť text alebo záznam dvojice hodnôt vlastností. Hodnoty vlastností môžu byť textové alebo číselné.


## Examples

### Example #1 
Vráti odvodené funkcie SQL pre reťazec pripojenia.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
