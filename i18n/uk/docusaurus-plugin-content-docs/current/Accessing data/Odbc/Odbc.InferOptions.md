---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Повертає результат спроби виснувати можливості SQL для драйвера ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Повертає результат спроби виснувати можливості SQL за рядком підключення "<code>connectionString</code>" за допомогою ODBC. Параметр "<code>connectionString</code>" може бути текстом або записом пар "властивість-значення". Значення властивостей можуть бути текстові або числові.


## Examples

### Example #1 
Повернення логічно виведених можливостей SQL для рядка підключення.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
