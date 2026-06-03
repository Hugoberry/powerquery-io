---
title: Odbc.DataSource
---

# Odbc.DataSource


Zwraca tabelę z tabelami SQL i widokami ze źródła danych ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z tabelami SQL i widokami ze źródła danych ODBC określonego za pomocą parametrów połączenia `connectionString`. Parametry połączenia `connectionString` mogą być tekstem lub rekordem z parami właściwość-wartość. Wartości właściwości mogą być tekstem lub liczbą. Można podać opcjonalny parametr rekordu `options`, aby określić dodatkowe parametry. Rekord może zawierać następujące pola:

-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `SqlCompatibleWindowsAuth` : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametrów połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.


## Examples

### Example #1
Zwróć tabele i widoki SQL z podanych parametrów połączenia.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
