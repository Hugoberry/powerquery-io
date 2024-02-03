---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Umožní importovať údaje z databázy Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Vráti tabuľku so zoznamom projektov dostupných na platforme Google BigQuery. Môže sa zadať voliteľný parameter záznamu <code>options</code>, ktorým sa ovládajú tieto možnosti:      <ul>        <li><code>ConnectionTimeout</code>: Časový interval, ktorý ovláda, ako dlho treba čakať pred ukončením pokusu o vytvorenie pripojenia k serveru. Predvolenou hodnotou je hodnota časového limitu pripojenia ODBC.</li>        <li><code>CommandTimeout</code>: Časový interval, ktorý ovláda, ako dlho môže byť spustený dotaz na strane servera predtým, ako sa zruší.</li>        <li><code>BillingProject</code>: ID fakturačného projektu. Predvolenou hodnotou je prvý dostupný projekt.</li>        <li><code>UseStorageApi</code>: Určuje, či sa má pre veľké množiny výsledkov použiť rozhranie BigQuery Storage API. Predvolenou hodnotou pri použití rozhrania Storage API je True. Ak sa rozhranie Storage API nemá použiť, nastavte hodnotu False.</li>      </ul>    Parameter záznamu sa zadáva vo formáte [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Zoznam dostupných projektov v platforme Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



