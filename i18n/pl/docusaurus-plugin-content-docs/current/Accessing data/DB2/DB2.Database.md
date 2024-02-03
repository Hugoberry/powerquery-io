---
title: DB2.Database
---

# DB2.Database


## Description

Zwraca tabelę tabel i widoków SQL dostępnych w bazie danych programu Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą tabele i widoki SQL dostępne w bazie danych Db2 na serwerze <code>server</code> w wystąpieniu bazy danych o nazwie <code>database</code>. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Za pomocą opcjonalnego parametru rekordu <code>options</code> można określić następujące opcje:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li><li><code>Query</code> : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestaw&#243;w wynik&#243;w, zwracany jest tylko pierwszy z nich.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li><li><code>Implementation</code> : Określa wewnętrzną implementację dostawcy bazy danych do użycia. Prawidłowe wartości to: „IBM” i „Microsoft”.</li><li><code>BinaryCodePage</code> : Identyfikator zestawu znak&#243;w kodowania (CCSID, Coded Character Set Identifier) na potrzeby dekodowania danych binarnych Db2 FOR BIT na ciągi znak&#243;w. Ma zastosowanie w przypadku opcji Implementation = &quot;Microsoft&quot;. Ustaw wartość 0, aby wyłączyć konwersję (domyślnie). Ustaw wartość 1, aby konwertować w oparciu o kodowanie bazy danych. Ustaw inny identyfikator CCSID, aby konwertować na kodowanie aplikacji.</li><li><code>PackageCollection</code> : Określa wartość ciągu dla kolekcji pakiet&#243;w (wartość domyślna to „NULLID”), aby umożliwić używanie udostępnionych pakiet&#243;w wymaganych do przetwarzania instrukcji SQL. Ma zastosowanie w przypadku opcji Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Określa, czy połączenie jest nawiązywane za pośrednictwem bramy Db2 Connect. Dotyczy implementacji „Microsoft”.</li></ul>    Parametr rekordu jest określany na przykład jako [opcja1 = wartość1, opcja2 = wartość2...] lub [Query = "select ..."].    



## Category
Accessing data
