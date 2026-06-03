---
title: DB2.Database
---

# DB2.Database


Zwraca tabelę tabel i widoków SQL dostępnych w bazie danych programu Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą tabele i widoki SQL dostępne w bazie danych Db2 na serwerze `server` w wystąpieniu bazy danych o nazwie `database`. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Za pomocą opcjonalnego parametru rekordu `options` można określić następujące opcje:

-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.
-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).
-   `Implementation` : Określa wewnętrzną implementację dostawcy bazy danych do użycia. Prawidłowe wartości to: „IBM” i „Microsoft”.
-   `BinaryCodePage` : Identyfikator zestawu znaków kodowania (CCSID, Coded Character Set Identifier) na potrzeby dekodowania danych binarnych Db2 FOR BIT na ciągi znaków. Ma zastosowanie w przypadku opcji Implementation = "Microsoft". Ustaw wartość 0, aby wyłączyć konwersję (domyślnie). Ustaw wartość 1, aby konwertować w oparciu o kodowanie bazy danych. Ustaw inny identyfikator CCSID, aby konwertować na kodowanie aplikacji.
-   `PackageCollection` : Określa wartość ciągu dla kolekcji pakietów (wartość domyślna to „NULLID”), aby umożliwić używanie udostępnionych pakietów wymaganych do przetwarzania instrukcji SQL. Ma zastosowanie w przypadku opcji Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Określa, czy połączenie jest nawiązywane za pośrednictwem bramy Db2 Connect. Dotyczy implementacji „Microsoft”.

Parametr rekordu jest określany na przykład jako \[opcja1 = wartość1, opcja2 = wartość2...\] lub wartość \[Query = „select ...”\].



## Category
Accessing data
