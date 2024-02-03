---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Returnerar resultatet av försök att härleda SQL-funktioner för en ODBC-drivrutin.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Returnerar resultatet av ett försök att härleda SQL-funktioner med anslutningssträngen <code>connectionString</code> med ODBC. <code>connectionString</code> kan vara text eller en post med egenskapsvärdespar. Egenskapsvärden kan vara antingen text eller siffror.


## Examples

### Example #1 
Returnera de härledda SQL-funktionerna för en anslutningssträng.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
