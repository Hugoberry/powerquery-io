---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importuj dane z bazy danych Google BigQuery przy użyciu usługi Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Zwraca tabelę z listą dostępnych projektów w usłudze Google BigQuery przy użyciu usługi Azure AD dla <code>Identyfikatora projektu rozliczeniowego</code>. Opcjonalny parametr rekordu, <code>options</code>, można określić, aby kontrolować następujące opcje:      <ul><li><code>ConnectionTimeout</code>: czas trwania określający czas oczekiwania przed porzuceniem próby nawiązania połączenia z serwerem. Wartość domyślna to wartość limitu czasu połączenia ODBC.</li>        <li><code>CommandTimeout</code>: czas trwania określający, jak długo można uruchomić zapytanie po stronie serwera przed anulowaniem.</li>        <li><code>UseStorageApi</code>: określa, czy używać interfejsu API magazynu BigQuery dla dużych zestawów wyników. Wartość domyślna to true, aby używać interfejsu API magazynu. Ustaw wartość false, aby nie używać interfejsu API magazynu</li>        <li><code>AudienceUri</code>: jest to identyfikator URI odbiorców, którego sterownik ODBC może używać na potrzeby żądań wymiany tokenów. To pole musi być w pełni kwalifikowanym identyfikatorem URI (tj. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), gdzie pool_id jest globalnie unikatową nazwą identyfikującą pulę pracowników.</li>      </ul>    Parametr rekordu jest określony jako [opcja1 = wartość1, opcja2 = wartość2...].    


## Examples

### Example #1 
Wyświetl listę dostępnych projektów w usłudze Google BigQuery przy użyciu usługi Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



