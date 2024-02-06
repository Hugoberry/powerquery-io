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

Zwraca tabelę wielowymiarowych pakietów z bazy danych SAP HANA <code>server</code>. Można opcjonalnie ustawić parametr rekordu <code>options</code>, aby kontrolować następujące opcje:    <ul><li><code>Query</code> : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestaw&#243;w wynik&#243;w, zwracany jest tylko pierwszy z nich.</li><li><code>Distribution</code> : Opcja SapHanaDistribution ustawiająca wartość właściwości „Dystrybucja” w parametrach połączenia. Routing instrukcji to metoda oceny prawidłowego węzła serwera systemu rozproszonego przed wykonaniem instrukcji. Wartość domyślna to SapHanaDistribution.All.</li><li><code>Implementation</code> : Określa implementację łącznika SAP HANA do użycia.</li><li><code>EnableColumnBinding</code> : Tworzy powiązanie zmiennych z kolumnami zestawu wynik&#243;w SAP HANA podczas pobierania danych. Może potencjalnie poprawić wydajność kosztem nieznacznie wyższego wykorzystania pamięci. Wartość domyślna to false.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna to 15 sekund.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li></ul>    



## Category
Accessing data
