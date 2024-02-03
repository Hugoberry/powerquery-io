---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Zwraca wynik próby wywnioskowania możliwości SQL dla sterownika ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Zwraca wynik próby wywnioskowania możliwości SQL z parametrami połączenia <code>connectionString</code> przy użyciu programu ODBC. Parametry <code>connectionString</code> mogą mieć postać tekstu lub rekordu par wartości właściwości. Wartości właściwości mogą być tekstowe lub liczbowe.


## Examples

### Example #1 
Zwróć wywnioskowane możliwości SQL dla parametrów połączenia.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
