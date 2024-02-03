---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importuj dane z magazynu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Zwraca tabelę zawierającą listę tabel w magazynie <code>warehouse</code> usługi Snowflake Computing zlokalizowanym na serwerze <code>server</code>. Istnieje możliwość określenia opcjonalnego parametru rekordu <code>options</code> do kontrolowania następujących opcji:<ul><li><code>Role</code>: Wartość tekstowa do użycia jako nazwa roli dla połączenia.</li><li><code>CreateNavigationProperties</code>: Wartość logiczna (true/false) decydująca o tym, czy generować właściwości nawigacji dla zwróconych wartości (wartość domyślna to true).</li><li><code>ConnectionTimeout</code>: Liczba sekund oczekiwania na odpowiedzi sieciowe od usługi Snowflake.</li><li><code>CommandTimeout</code>: Liczba sekund oczekiwania na wykonanie zapytania.</li></ul>    


## Examples

### Example #1 
Wyświetl listę tabeli w magazynie Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



