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

Zwraca listę tabel z klastra HDInsight Interactive Query określonego w bazie danych `database` na serwerze `server` tego klastra. Opcjonalnie można określić port serwera oddzielony dwukropkiem. Możliwe jest również określenie opcjonalnego parametru `options` w celu kontrolowania następujących opcji:

-   `ConnectionTimeout`: Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `CommandTimeout`: Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.

Parametr `options` jest określany w postaci \[opcja1 = wartość1, opcja2 = wartość2...\].


