---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Zwraca kolekcję schematu dla źródła danych ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Zwraca kolekcję schematu dla źródła danych ADO.NET z nazwą dostawcy <code>providerName</code> i parametrami połączenia <code>connectionString</code>. Parametry <code>connectionString</code> mogą mieć postać tekstu lub rekordu par wartości właściwości. Wartości właściwości mogą być tekstowe lub liczbowe. Opcjonalny parametr rekordu, <code>options</code>, może być podany, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:    <ul><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametr&#243;w połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
