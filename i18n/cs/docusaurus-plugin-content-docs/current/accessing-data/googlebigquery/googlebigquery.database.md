---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Umožňuje importovat data z databáze Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Vrátí tabulku s výpisem dostupných projektů v Google BigQuery. Můžete zadat `možnosti`, což je volitelný parametr záznamu, který řídí následující možnosti:

-   `ConnectionTimeout`: Doba trvání, která určuje dobu čekání před opuštěním pokusu o připojení k serveru. Výchozí hodnota je hodnota časového limitu připojení ODBC.
-   `CommandTimeout`: Doba trvání, která určuje, jak dlouho může být dotaz na straně serveru spuštěn, než dojde k jeho zrušení.
-   `BillingProject`: ID fakturačního projektu. Výchozí hodnota je první dostupný projekt.
-   `UseStorageApi`: Určuje, jestli se má pro velké sady výsledků použít rozhraní API úložiště BigQuery. Výchozí hodnota true (pravda) znamená použít rozhraní API úložiště. Pokud nechcete používat
rozhraní API služby Storage, nastavte hodnotu false.

Parametr záznamu je zadán jako \[možnost1 = hodnota1, možnost2 = hodnota2...\].


## Examples

### Example #1
Vypíše dostupné projekty v Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



