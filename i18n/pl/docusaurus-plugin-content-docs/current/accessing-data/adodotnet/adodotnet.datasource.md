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

Zwraca kolekcję schematu dla źródła danych ADO.NET z nazwą dostawcy `providerName` i parametrami połączenia `connectionString`. Parametry `connectionString` mogą mieć postać tekstu lub rekordu par wartości właściwości. Wartości właściwości mogą być tekstowe lub liczbowe. Opcjonalny parametr rekordu, `options`, może być podany, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `SqlCompatibleWindowsAuth` : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametrów połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.
-   `TypeMap`



## Category
Accessing data
