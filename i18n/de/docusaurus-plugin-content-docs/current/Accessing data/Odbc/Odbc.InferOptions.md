---
title: Odbc.InferOptions
---

# Odbc.InferOptions


## Description

Gibt das Ergebnis des Versuchs zurück, SQL-Funktionen für einen ODBC-Treiber abzuleiten.


## Syntax

```powerquery
Odbc.InferOptions(
    connectionString as any
) as record
```


## Details

Gibt das Ergebnis des Versuchs zurück, SQL-Funktionen mit der Verbindungszeichenfolge "<code>connectionString</code>" unter Verwendung von ODBC abzuleiten. "<code>connectionString</code>" kann Text oder ein Datensatz mit Eigenschaft/-Wert-Paaren sein. Eigenschaftswerte können Text oder eine Zahl sein.


## Examples

### Example #1 
Gibt die abgeleiteten SQL-Funktionen für eine Verbindungszeichenfolge zurück.
```powerquery
Odbc.InferOptions("dsn=your_dsn")
```

Result: 
```powerquery
record
```




## Category
Accessing data
