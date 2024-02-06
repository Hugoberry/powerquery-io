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

Zwraca tabelę zawierającą tabele, widoki i składowane funkcje skalarne SQL dostępne w bazie danych programu MySQL na serwerze <code>server</code> w wystąpieniu bazy danych o nazwie <code>database</code>. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Za pomocą opcjonalnego parametru rekordu <code>options</code> można określić następujące opcje:    <ul><li><code>Encoding</code> : Wartość kodowania tekstu, kt&#243;ra określa zestaw znak&#243;w używany do kodowania wszystkich zapytań wysłanych do serwera (wartość domyślna to null).</li><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li><li><code>Query</code> : Natywne zapytanie SQL służące do pobierania danych. Jeśli zapytanie generuje wiele zestaw&#243;w wynik&#243;w, zwracany jest tylko pierwszy z nich.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>TreatTinyAsBoolean</code> : Wartość logiczna (true/false) określająca, czy kolumny tinyint mają być wymuszane na serwerze jako wartości logiczne. Wartość domyślna to true.</li><li><code>OldGuids</code> : Wartość logiczna (true/false) określająca, czy jako identyfikatory GUID będą traktowane kolumny char(36), jeśli wartość to false, czy binary(16), jeśli wartość to true. Wartość domyślna to false.</li><li><code>ReturnSingleDatabase</code> : Wartość logiczna (true/false) określająca, czy zwr&#243;cić wszystkie tabele wszystkich baz danych (jeśli wartość to false), czy zwr&#243;cić tabele i widoki określonej bazy danych (jeśli wartość to true). Wartość domyślna to false.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li></ul>    Parametr rekordu jest określany na przykład jako [opcja1 = wartość1, opcja2 = wartość2...] lub [Query = "select ..."].    



## Category
Accessing data
