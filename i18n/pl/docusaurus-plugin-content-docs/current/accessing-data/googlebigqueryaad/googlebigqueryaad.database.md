---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importowanie danych z bazy danych Google BigQuery przy użyciu usługi Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę zawierającą listę dostępnych projektów w usłudze Google BigQuery przy użyciu rozwiązania Microsoft Entra ID dla `Identyfikatora projektu rozliczeń`. Opcjonalny parametr rekordu, `opcje`, może być określony w celu kontrolowania następujących opcji:

-   `ConnectionTimeout`: czas trwania określający czas oczekiwania przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to wartość limitu czasu połączenia ODBC.
-   `CommandTimeout`: czas trwania określający, jak długo zapytanie po stronie serwera może być uruchamiane zanim zostanie anulowane.
-   `UseStorageApi`: określa, czy interfejs API magazynu BigQuery ma być używany dla dużych zestawów wyników. W celu użycia interfejsu API magazynu wartość domyślna to true. Ustaw wartość false, aby nie używać interfejsu API magazynu
-   `AudienceUri`: jest to identyfikator URI odbiorców, którego sterownik ODBC może używać na potrzeby żądań wymiany tokenów. To pole musi być w pełni kwalifikowanym identyfikatorem URI (tj. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), gdzie pool\_id jest globalnie unikatową nazwą identyfikującą pulę pracowników.

Parametr rekordu jest określony jako \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Wyświetlanie listy dostępnych projektów w usłudze Google BigQuery przy użyciu usługi Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



