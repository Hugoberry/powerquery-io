---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Retourneert het resultaat van het afleiden van SQL-mogelijkheden voor een ODBC-stuurprogramma.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Retourneert het resultaat van het afleiden van SQL-mogelijkheden met de verbindingsreeks `connectionString` met ODBC. `connectionString` kan tekst zijn of een record met eigenschapswaardeparen. Eigenschapswaarden kunnen tekst of cijfers zijn.


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
