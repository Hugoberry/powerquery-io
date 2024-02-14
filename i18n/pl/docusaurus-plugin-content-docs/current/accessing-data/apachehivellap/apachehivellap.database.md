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

Zwraca listę tabel z funkcji LLAP programu Hive określonego w bazie danych <code>database</code> na serwerze <code>server</code> tej funkcji przy użyciu wybranego protokołu <code>protocol</code>. Protokół transportu platformy Thrift jest typem wyliczanym, który przyjmuje wartości „Standard” i „HTTP”. Możliwe jest określenie opcjonalnego parametru <code>options</code> w celu kontrolowania następujących opcji:<ul>        <li><code>ConnectionTimeout</code>: Czas określający, jak długo oczekiwać przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna jest zależna od sterownika.</li>        <li><code>CommandTimeout</code>: Czas określający, jak długo może być wykonywane zapytanie po stronie serwera, zanim zostanie anulowane. Wartość domyślna jest zależna od sterownika.</li></ul>Parametr <code>options</code> jest określany w postaci [opcja1 = wartość1, opcja2 = wartość2...].


