---
title: SapHana.Database
---

# SapHana.Database


Zwraca pakiety w bazie danych SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę wielowymiarowych pakietów z bazy danych SAP HANA `server`. Można opcjonalnie ustawić parametr rekordu `options`, aby kontrolować następujące opcje:

-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `Distribution` : Opcja SapHanaDistribution ustawiająca wartość właściwości „Dystrybucja” w parametrach połączenia. Routing instrukcji to metoda oceny prawidłowego węzła serwera systemu rozproszonego przed wykonaniem instrukcji. Wartość domyślna to SapHanaDistribution.All.
-   `Implementation` : Określa implementację łącznika SAP HANA do użycia.
-   `EnableColumnBinding` : Tworzy powiązanie zmiennych z kolumnami zestawu wyników SAP HANA podczas pobierania danych. Może potencjalnie poprawić wydajność kosztem nieznacznie wyższego wykorzystania pamięci. Wartość domyślna to false.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.



## Category
Accessing data
