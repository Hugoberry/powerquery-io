---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Повертає результат спроби виснувати можливості SQL для драйвера ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Повертає результат спроби виснувати можливості SQL за рядком підключення "`connectionString`" за допомогою ODBC. Параметр "`connectionString`" може бути текстом або записом пар "властивість-значення". Значення властивостей можуть бути текстові або числові.


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
