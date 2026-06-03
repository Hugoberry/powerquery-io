---
title: Odbc.Query
---

# Odbc.Query


Zwraca wynik uruchomienia zapytania natywnego dla źródła danych ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Zwraca wynik uruchomienia elementu `query` za pomocą parametrów połączenia `connectionString` przy użyciu interfejsu ODBC. Parametry połączenia `connectionString` mogą być tekstem lub rekordem z parami właściwość-wartość. Wartości właściwości mogą być tekstem lub liczbą. Można podać opcjonalny parametr rekordu `options`, aby określić dodatkowe parametry. Rekord może zawierać następujące pola:

-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `SqlCompatibleWindowsAuth` : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametrów połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.


## Examples

### Example #1
Zwróć wynik uruchomienia prostego zapytania względem podanych parametrów połączenia.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
