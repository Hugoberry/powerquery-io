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

Zwraca tabelę z tabelami, widokami i przechowywanymi funkcjami Netezza z bazy danych Netezza Server <code>database</code> na serwerze <code>server</code>. Można opcjonalnie określić port z serwerem, oddzielając go dwukropkiem. Można również określić dodatkowy parametr rekordu, <code>options</code>, aby kontrolować następujące opcje:<ul>        <li><code>CreateNavigationProperties</code>: wartość logiczna (true/false) określająca, czy należy generować właściwości nawigacyjne dla zwróconych wartości (wartość domyślna: true)</li>        <li><code>HierarchicalNavigation</code>: wartość logiczna (true/false) określająca, czy należy wyświetlać tabele pogrupowane według ich nazw schematów (wartość domyślna: false)</li>        <li><code>ConnectionTimeout</code>: czas określający długość oczekiwania przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li>        <li><code>CommandTimeout</code>: czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.</li><li><code>NormalizeDatabaseName</code>: wartość logiczna (true/false) określająca, czy należy znormalizować nazwę bazy danych do wielkich liter, czy interpretować ją dosłownie (wartość domyślna: true).</li></ul>Parametr rekordu jest określany jako [opcja1 = wartość1, opcja2 = wartość2...].


## Examples

### Example #1 
Lista tabel w projekcie urządzenia IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



