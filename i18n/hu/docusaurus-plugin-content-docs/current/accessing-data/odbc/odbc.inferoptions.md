---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Egy ODBC-illesztőprogram SQL-képességeinek kikövetkeztetésére tett kísérlet eredményét adja vissza.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Az SQL-képességek `connectionString` kapcsolati sztringgel és ODBC-vel való kikövetkeztetésére tett kísérlet eredményét adja vissza. A(z) `connectionString` lehet szöveg vagy tulajdonságérték-párokból álló rekord. A tulajdonságértékek szövegesek vagy számok lehetnek.


## Examples

### Example #1
Egy kapcsolati sztring kikövetkeztetett SQL-képességeit küldi vissza.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
