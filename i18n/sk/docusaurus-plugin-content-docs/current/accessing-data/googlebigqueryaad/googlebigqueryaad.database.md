---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Import údajov z databázy Google BigQuery pomocou Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Vráti tabuľku s dostupnými projektmi v Google BigQuery pomocou Microsoft Entra ID pre `ID fakturačnej úlohy` . Voliteľný parameter záznamu, `options`, možno zadať na ovládanie nasledujúcich možností:

-   `ConnectionTimeout`: Trvanie určujúce, ako dlho sa má čakať pred zanechaním pokusu o pripojenie na server. Predvolená hodnota je hodnota časového limitu pripojenia ODBC.
-   `CommandTimeout`: Trvanie, ktoré určuje, ako dlho môže byť dotaz na strane servera spustený pred jeho zrušením.
-   `UseStorageApi`: Určuje, či sa má pre veľké množiny výsledkov použiť rozhranie BigQuery Storage API. Predvolenou hodnotou pri použití rozhrania Storage API je True. Nastavené na hodnotu false, ak nechcete používať rozhranie Storage API
-   `AudienceUri`: Toto je identifikátor URI cieľovej skupiny, ktorý môže ovládač ODBC použiť pre svoje požiadavky na výmenu tokenov. Toto pole musí byť plne kvalifikovaný identifikátor URI (t.j. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), kde pool\_id je globálne jedinečný názov na identifikáciu fondu pracovníkov.

Parameter záznamu je zadaný ako \[option1 = hodnota1, možnosť2 = hodnota2...\].


## Examples

### Example #1
Zobrazenie zoznamu dostupných projektov v službe Google BigQuery pomocou microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



