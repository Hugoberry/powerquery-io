---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Umožní importovať údaje z databázy Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Vráti tabuľku so zoznamom projektov dostupných na platforme Google BigQuery. Voliteľný parameter záznamu, `options`, možno zadať na ovládanie nasledujúcich možností:

-   `ConnectionTimeout`: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie na server. Predvolená hodnota je hodnota časového limitu pripojenia ODBC.
-   `CommandTimeout`: Trvanie, ktoré určuje, ako dlho môže byť dotaz na strane servera spustený pred jeho zrušením.
-   `BillingProject`: ID projektu fakturácie. Predvolená hodnota je prvý dostupný projekt.
-   `UseStorageApi`: Určuje, či sa má pre veľké množiny výsledkov použiť rozhranie BigQuery Storage API. Predvolenou hodnotou pri použití rozhrania Storage API je True. Nastavené na hodnotu false, ak nechcete používať rozhranie Storage API

Parameter záznamu je zadaný ako \[option1 = hodnota1, možnosť2 = hodnota2...\].


## Examples

### Example #1
Zoznam dostupných projektov v platforme Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



