---
title: Odbc.InferOptions
---

# Odbc.InferOptions


Zwraca wynik próby wywnioskowania możliwości SQL dla sterownika ODBC.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Remarks

Zwraca wynik próby wywnioskowania możliwości SQL z parametrami połączenia `connectionString` przy użyciu programu ODBC. Parametry `connectionString` mogą mieć postać tekstu lub rekordu par wartości właściwości. Wartości właściwości mogą być tekstowe lub liczbowe.


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
