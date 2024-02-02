---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Returns the result of trying to infer SQL capabilities for an ODBC driver.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Returns the result of trying to infer SQL capbabilities with the connection string <code>connectionString</code> using ODBC. <code>connectionString</code> can be text or a record of property value pairs. Property values can either be text or number.


## Examples

### Example #1 
Return the inferred SQL capabilities for a connection string.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
