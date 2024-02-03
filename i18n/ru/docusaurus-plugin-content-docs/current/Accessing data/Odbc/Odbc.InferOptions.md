---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Возвращает результат попытки вывести возможности SQL для драйвера ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Возвращает результат попытки вывести возможности SQL по строке подключения <code>connectionString</code>, используя ODBC. <code>connectionString</code> может быть текстом или записью пар "свойство-значение". Значения свойств могут быть текстовыми или числовыми.


## Examples

### Example #1 
Возврат выводимой возможности SQL для строки подключения.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
