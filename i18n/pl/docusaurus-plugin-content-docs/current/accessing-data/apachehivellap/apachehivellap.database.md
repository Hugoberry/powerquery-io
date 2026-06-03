---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Importuj dane z funkcji LLAP programu Hive


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Zwraca listę tabel z funkcji LLAP programu Hive określonego w bazie danych `database` na serwerze `server` tej funkcji przy użyciu wybranego protokołu `protocol`. Protokół transportu platformy Thrift jest typem wyliczanym, który przyjmuje wartości „Standard” i „HTTP”. Możliwe jest określenie opcjonalnego parametru `options` w celu kontrolowania następujących opcji:

-   `ConnectionTimeout`: Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.
-   `CommandTimeout`: Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.

Parametr `options` jest określany w postaci \[opcja1 = wartość1, opcja2 = wartość2...\].


