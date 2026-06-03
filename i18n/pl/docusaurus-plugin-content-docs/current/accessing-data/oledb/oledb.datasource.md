---
title: OleDb.DataSource
---

# OleDb.DataSource


Zwraca tabelę z tabelami SQL i widokami ze źródła danych OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z tabelami SQL i widokami ze źródła danych OLE DB określonego przez parametry połączenia `connectionString`. Element `connectionString` może mieć wartość tekstową lub być rekordem par właściwości i wartości. Wartości właściwości mogą być tekstem lub liczbami. Można podać opcjonalny parametr rekordu `options`, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.
-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to true).
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `SqlCompatibleWindowsAuth` : Wartość logiczna (true/false) określająca, czy mają zostać utworzone opcje parametrów połączenia zgodne z programem SQL Server na potrzeby uwierzytelniania systemu Windows. Wartość domyślna to true.

Parametr rekordu jest określany na przykład jako \[opcja1 = wartość1, opcja2 = wartość2...\] lub \[Query = „select ...”\].



## Category
Accessing data
