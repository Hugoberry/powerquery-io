---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Retourneert het resultaat van het afleiden van SQL-mogelijkheden voor een ODBC-stuurprogramma.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Retourneert het resultaat van het afleiden van SQL-mogelijkheden met de verbindingsreeks <code>connectionString</code> met ODBC. <code>connectionString</code> kan tekst zijn of een record met eigenschapswaardeparen. Eigenschapswaarden kunnen tekst of cijfers zijn.


## Examples

### Example #1 
De afgeleide SQL-mogelijkheden voor een verbindingsreeks retourneren.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
