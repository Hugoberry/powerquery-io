---
title: Sql.Databases
---

# Sql.Databases


Zwraca tabelę baz danych z serwera programu SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą bazy danych znajdujące się na określonym serwerze SQL Server, <code>server</code>. Opcjonalny parametr rekordu (<code>options</code>) pozwala określić następujące opcje:    <ul><li><code>CreateNavigationProperties</code> : Wartość logiczna (true/false) określająca, czy na podstawie zwr&#243;conych wartości mają być generowane właściwości nawigacji (wartość domyślna to true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcja, kt&#243;ra jest używana do tworzenia nazw właściwości nawigacji.</li><li><code>MaxDegreeOfParallelism</code> : Liczba określająca wartość klauzuli zapytania „maxdop” w wygenerowanym zapytaniu SQL.</li><li><code>CommandTimeout</code> : Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna wynosi dziesięć minut.</li><li><code>ConnectionTimeout</code> : Czas określający, jak długo oczekiwać przed porzuceniem pr&#243;by nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li><li><code>HierarchicalNavigation</code> : Wartość logiczna (true/false) określająca, czy wyświetlać tabele pogrupowane według ich nazw schematu (wartość domyślna to false).</li><li><code>MultiSubnetFailover</code> : Wartość logiczna (true/false) określająca wartość właściwości „MultiSubnetFailover” w parametrach połączenia (wartość domyślna to false).</li><li><code>UnsafeTypeConversions</code> : Wartość logiczna (true/false), kt&#243;ra w przypadku podania wartości true powoduje pr&#243;bę przeprowadzenia składania konwersji typ&#243;w mogących zakończyć się niepowodzeniem i przez to spowodować niepowodzenie całego zapytania. Niezalecana do użycia og&#243;lnego.</li><li><code>ContextInfo</code> : Wartość binarna, kt&#243;ra jest używana do ustawiania informacji CONTEXT_INFO przed uruchomieniem każdego polecenia.</li><li><code>OmitSRID</code> : Wartość logiczna (true/false), kt&#243;ra w przypadku podania wartości true powoduje pomijanie identyfikatora SRID podczas tworzenia danych Well-Known Text na podstawie typ&#243;w geometrycznych i geograficznych.</li><li><code>EnableCrossDatabaseFolding</code> : Wartość logiczna (true/false), kt&#243;ra w przypadku wartości true umożliwia składanie zapytań względem baz danych na tym samym serwerze. Wartością domyślną jest false.</li></ul>    Parametr rekordu można podać na przykład w formacie [opcja1 = wartość1, opcja2 = wartość2...].    <br />    Nie jest obsługiwane ustawianie zapytania SQL w celu uruchomienia na serwerze. Aby uruchomić zapytanie SQL, należy zamiast tego użyć funkcji <code>Sql.Database</code>.    



## Category
Accessing data
