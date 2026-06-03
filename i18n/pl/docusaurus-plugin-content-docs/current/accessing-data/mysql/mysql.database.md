---
title: MySQL.Database
---

# MySQL.Database


Zwraca tabelę tabel, widoków i składowanych funkcji skalarnych SQL dostępnych w bazie danych programu MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą tabele, widoki i składowane funkcje skalarne SQL dostępne w bazie danych programu MySQL na serwerze `server` w wystąpieniu bazy danych o nazwie `database`. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Za pomocą opcjonalnego parametru rekordu `options` można określić następujące opcje:

-   `Encoding` : Wartość kodowania tekstu, która określa zestaw znaków używany do kodowania wszystkich zapytań wysłanych do serwera (wartość domyślna to null).
-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.
-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `TreatTinyAsBoolean` : Wartość logiczna (true/false) określająca, czy kolumny tinyint mają być wymuszane na serwerze jako wartości logiczne. Wartość domyślna to true.
-   `OldGuids` : Wartość logiczna (true/false) określająca, czy jako identyfikatory GUID będą traktowane kolumny char(36), jeśli wartość to false, czy binary(16), jeśli wartość to true. Wartość domyślna to false.
-   `ReturnSingleDatabase` : Wartość logiczna (true/false) określająca, czy zwrócić wszystkie tabele wszystkich baz danych (jeśli wartość to false), czy zwrócić tabele i widoki określonej bazy danych (jeśli wartość to true). Wartość domyślna to false.
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).

Parametr rekordu jest określany na przykład jako \[opcja1 = wartość1, opcja2 = wartość2...\] lub \[Query = „select ...”\].



## Category
Accessing data
