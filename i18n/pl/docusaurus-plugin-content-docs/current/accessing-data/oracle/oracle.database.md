---
title: Oracle.Database
---

# Oracle.Database


Zwraca tabelę tabel i widoków SQL z bazy danych Oracle Database.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą tabele i widoki SQL dostępne w bazie danych Oracle Database na serwerze `server`. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Za pomocą opcjonalnego parametru rekordu `options` można określić następujące opcje:

-   `CreateNavigationProperties` : Wartość logiczna (true/false) określająca, czy na podstawie zwróconych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).
-   `NavigationPropertyNameGenerator` : Funkcja, która jest używana do tworzenia nazw właściwości nawigacji.
-   `Query` : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestawów wyników, zwracany jest tylko pierwszy z nich.
-   `CommandTimeout` : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.
-   `ConnectionTimeout` : Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `HierarchicalNavigation` : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).

Parametr rekordu jest określany na przykład jako \[opcja1 = wartość1, opcja2 = wartość2...\] lub \[Query = „select ...”\].



## Category
Accessing data
