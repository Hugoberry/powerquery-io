---
title: Sql.Database
---

# Sql.Database


Zwraca tabelę tabel, widoków i funkcji składowanych SQL z bazy danych programu SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą tabele, widoki i funkcje składowane SQL z bazy danych programu SQL Server `database` na serwerze `server`. Opcjonalnie można określić port serwera oddzielony dwukropkiem lub przecinkiem. Opcjonalny parametr rekordu `options` pozwala określić następujące opcje:

-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.
-   `MaxDegreeOfParallelism` : Liczba określająca wartość klauzuli zapytania „maxdop” w wygenerowanym zapytaniu SQL.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).
-   `MultiSubnetFailover` : Wartość logiczna (true/false) określająca wartość właściwości „MultiSubnetFailover” w parametrach połączenia (wartość domyślna to false).
-   `UnsafeTypeConversions` : Wartość logiczna (true/false), która w przypadku podania wartości true powoduje próbę przeprowadzenia składania konwersji typów mogących zakończyć się niepowodzeniem i przez to spowodować niepowodzenie całego zapytania. Niezalecana do użycia ogólnego.
-   `ContextInfo` : Wartość binarna, która jest używana do ustawiania informacji CONTEXT\_INFO przed uruchomieniem każdego polecenia.
-   `OmitSRID` : Wartość logiczna (true/false), która w przypadku podania wartości true powoduje pomijanie identyfikatora SRID podczas tworzenia danych Well-Known Text na podstawie typów geometrycznych i geograficznych.
-   `EnableCrossDatabaseFolding` : Wartość logiczna (true/false), która w przypadku wartości true umożliwia składanie zapytań względem baz danych na tym samym serwerze. Wartością domyślną jest false.

Parametr rekordu można podać na przykład w formacie \[opcja1 = wartość1, opcja2 = wartość2...\] lub \[Query = "select ..."\].



## Category
Accessing data
