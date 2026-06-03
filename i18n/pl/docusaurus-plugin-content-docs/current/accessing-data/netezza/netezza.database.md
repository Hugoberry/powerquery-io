---
title: Netezza.Database
---

# Netezza.Database


Importuj dane z bazy danych IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z tabelami, widokami i przechowywanymi funkcjami Netezza z bazy danych Netezza Server `database` na serwerze `server`. Można opcjonalnie określić port z serwerem, oddzielając go dwukropkiem. Można również określić dodatkowy parametr rekordu, `options`, aby kontrolować następujące opcje:

-   `CreateNavigationProperties`: wartość logiczna (true/false) określająca, czy należy generować właściwości nawigacyjne dla zwróconych wartości (wartość domyślna: true)
-   `HierarchicalNavigation`: wartość logiczna (true/false) określająca, czy należy wyświetlać tabele pogrupowane według ich nazw schematów (wartość domyślna: false)
-   `ConnectionTimeout`: czas określający długość oczekiwania przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `CommandTimeout`: czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.
-   `NormalizeDatabaseName`: wartość logiczna (true/false) określająca, czy należy znormalizować nazwę bazy danych do wielkich liter, czy interpretować ją dosłownie (wartość domyślna: true).

Parametr rekordu jest określany jako \[opcja1 = wartość1, opcja2 = wartość2...\].


## Examples

### Example #1
Lista tabel w projekcie urządzenia IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



