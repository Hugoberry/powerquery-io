---
title: Snowflake.Databases
---

# Snowflake.Databases


Importuj dane z magazynu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą listę tabel w magazynie `warehouse` usługi Snowflake Computing zlokalizowanym na serwerze `server`. Istnieje możliwość określenia opcjonalnego parametru rekordu `options` do kontrolowania następujących opcji:

-   `Role`: Wartość tekstowa do użycia jako nazwa roli dla połączenia.
-   `CreateNavigationProperties`: Wartość logiczna (true/false) decydująca o tym, czy generować właściwości nawigacji dla zwróconych wartości (wartość domyślna to true).
-   `ConnectionTimeout`: Liczba sekund oczekiwania na odpowiedzi sieciowe od usługi Snowflake.
-   `CommandTimeout`: Liczba sekund oczekiwania na wykonanie zapytania.


## Examples

### Example #1
Wyświetl listę tabeli w magazynie Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



