---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importuj dane z bazy danych usługi Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą listę dostępnych projektów w usłudze Google BigQuery. Opcjonalny parametr rekordu, `opcje`, może być określony w celu kontrolowania następujących opcji:

-   `ConnectionTimeout`: czas trwania określający czas oczekiwania przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to wartość limitu czasu połączenia ODBC.
-   `CommandTimeout`: czas trwania określający, jak długo zapytanie po stronie serwera może być uruchamiane zanim zostanie anulowane.
-   `BillingProject`: identyfikator projektu rozliczeniowego. Wartością domyślną jest pierwszy dostępny projekt.
-   `UseStorageApi`: określa, czy interfejs API magazynu BigQuery ma być używany dla dużych zestawów wyników. W celu użycia interfejsu API magazynu wartość domyślna to true. Ustaw wartość false, aby nie używać interfejsu API magazynu

Parametr rekordu jest określony jako \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Wyświetl listę dostępnych projektów w usłudze Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



