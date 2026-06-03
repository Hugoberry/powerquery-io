---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Zwraca tabelę z wielowymiarowymi modułami lub modelami tabelarycznymi z bazy danych usług Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę wielowymiarowych modułów lub modeli tabelarycznych z bazy danych usług Analysis Services `database` na serwerze `server`. Opcjonalny parametr rekordu (`options`) pozwala określić następujące opcje:

-   `Query` : Natywne zapytanie MDX służące do pobierania danych.
-   `TypedMeasureColumns` : Wartość logiczna wskazująca, czy typy określone w modelu wielowymiarowym lub tabelarycznym będą używane dla typów dodanych kolumn miary. Ustawienie wartości false spowoduje użycie typu „number” dla wszystkich kolumn miary. Wartość domyślna tej opcji to false.
-   `Culture` : Nazwa kultury określająca kulturę dla danych. Odpowiada właściwości parametrów połączenia „Identyfikator ustawień regionalnych”.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `SubQueries` : Liczba (0, 1 lub 2) określająca wartość właściwości „SubQueries” w parametrach połączenia. Ta wartość steruje zachowaniem obliczeniowych elementów członkowskich w podwyborach i modułach podrzędnych. Wartość domyślna to 2.
-   `Implementation`



## Category
Accessing data
