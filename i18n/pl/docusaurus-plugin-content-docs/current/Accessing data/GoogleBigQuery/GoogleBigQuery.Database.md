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

      Zwraca tabelę z listą dostępnych projektów w usłudze Google BigQuery. Opcjonalny parametr rekordu <code>options</code> może zostać określony do sterowania następującymi opcjami:      <ul>        <li><code>ConnectionTimeout</code>: Czas trwania decydujący o tym, jak długo należy czekać przed zarzuceniem próby nawiązania połączenia z serwerem. Wartością domyślną jest wartość limitu czasu połączenia ODBC.</li>        <li><code>CommandTimeout</code>: Czas trwania decydujący o tym, jak długo zapytanie po stronie serwera może być wykonywane przed anulowaniem.</li>        <li><code>BillingProject</code>: Identyfikator projektu rozliczeniowego. Domyślną wartością jest pierwszy dostępny projekt.</li>      <li><code>UseStorageApi</code>: Określa, czy należy użyć interfejsu API magazynu BigQuery do dużych zestawów wyników. Domyślna wartość to true pozwalająca użyć interfejsu API magazynu. Ustawienie wartości false spowoduje, że nie będzie używany interfejs API magazynu</li>   </ul>      Parametr rekordu jest określany w postaci [opcja1 = wartość1, opcja2 = wartość2...].    


## Examples

### Example #1 
Wyświetl listę dostępnych projektów w usłudze Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



