---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Zwraca tabelę tabel i widoków SQL dostępnych w bazie danych programu PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą tabele i widoki SQL dostępne w bazie danych PostgreSQL na serwerze <code>server</code> w wystąpieniu bazy danych o nazwie <code>database</code>. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Opcjonalny parametr rekordu (<code>options</code>) pozwala określić następujące opcje:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li><li><code>Query</code> : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestaw&#243;w wynik&#243;w, zwracany jest tylko pierwszy z nich.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li></ul>    Parametr rekordu można podać na przykład w formacie [opcja1 = wartość1, opcja2 = wartość2...] lub [Query = "select ..."].    



## Category
Accessing data
