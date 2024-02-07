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

Zwraca wynik uruchomienia elementu <code>query</code> za pomocą parametrów połączenia <code>connectionString</code> przy użyciu interfejsu ODBC. Parametry połączenia <code>connectionString</code> mogą być tekstem lub rekordem z parami właściwość-wartość. Wartości właściwości mogą być tekstem lub liczbą. Można podać opcjonalny parametr rekordu <code>options</code>, aby określić dodatkowe parametry. Rekord może zawierać następujące pola:    <ul><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametr&#243;w połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.</li></ul>


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
