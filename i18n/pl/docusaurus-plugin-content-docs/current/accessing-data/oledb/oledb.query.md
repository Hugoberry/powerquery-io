---
title: OleDb.Query
---

# OleDb.Query


Zwraca wynik uruchomienia zapytania natywnego dla źródła danych OLE DB.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Zwraca wynik uruchomienia elementu `query` za pomocą parametrów połączenia `connectionString` przy użyciu bazy danych OLE DB. Element `connectionString` może mieć wartość tekstową lub być rekordem par właściwości i wartości. Wartości właściwości mogą być tekstem lub liczbami. Aby określić dodatkowe właściwości, można podać opcjonalny parametr rekordu `options`. Rekord może zawierać następujące pola:

-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `SqlCompatibleWindowsAuth` : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametrów połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.



## Category
Accessing data
