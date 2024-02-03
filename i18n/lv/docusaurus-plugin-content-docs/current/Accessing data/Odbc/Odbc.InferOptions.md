---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Atgriež rezultātu, kas iegūts, mēģinot izsecināt SQL iespējas ODBC draiverim.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Atgriež rezultātu, kas iegūts, mēģinot izsecināt SQL iespējas ar savienojuma virkni <code>connectionString</code>, izmantojot ODBC. <code>connectionString</code> var būt teksts vai rekvizītu vērtību pāru ieraksts. Rekvizītu vērtības var būt teksts vai skaitlis.


## Examples

### Example #1 
Atgriež izsecinātās SQL iespējas savienojuma virknei.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
