---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Importuj dane z klastra HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Zwraca listę tabel z klastra HDInsight Interactive Query określonego w bazie danych <code>database</code> na serwerze <code>server</code> tego klastra. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Możliwe jest również określenie opcjonalnego parametru <code>options</code> w celu kontrolowania następujących opcji:<ul>        <li><code>ConnectionTimeout</code>: Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li>        <li><code>CommandTimeout</code>: Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.</li></ul>Parametr <code>options</code> jest określany w postaci [opcja1 = wartość1, opcja2 = wartość2...].


