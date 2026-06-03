---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Zwraca bazy danych usług Analysis Services na konkretnym hoście.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Zwraca bazy danych z wystąpienia usług Analysis Services `server`. Można podać opcjonalny parametr rekordu `options` w celu określenia dodatkowych właściwości. Rekord może zawierać następujące pola:

-   `TypedMeasureColumns` : Wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane dla typów dodanych kolumn miary. Ustawienie wartości false spowoduje użycie typu „number” dla wszystkich kolumn miary. Wartość domyślna tej opcji to false.
-   `Culture` : Nazwa kultury określająca kulturę dla danych. Odpowiada właściwości parametrów połączenia „Identyfikator ustawień regionalnych”.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `SubQueries` : Liczba (0, 1 lub 2) określająca wartość właściwości „SubQueries” w parametrach połączenia. Ta wartość steruje zachowaniem obliczeniowych elementów członkowskich w podwyborach i modułach podrzędnych. Wartość domyślna to 2.
-   `Implementation`



## Category
Accessing data
