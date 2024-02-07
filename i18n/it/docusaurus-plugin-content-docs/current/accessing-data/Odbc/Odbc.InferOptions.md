---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Restituisce il risultato del tentativo di dedurre le capacità SQL per un driver ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Restituisce il risultato del tentativo di dedurre le capacità SQL con la stringa di connessione <code>connectionString</code> usando ODBC. <code>connectionString</code> può essere un testo o un record di coppie valore-proprietà. I valori di proprietà possono essere di testo o numerici.


## Examples

### Example #1 
Restituisce le funzionalità SQL dedotte per una stringa di connessione.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
