---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Umožňuje importovat data z databáze Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Vrátí tabulku s výpisem dostupných projektů v Google BigQuery. Jde zadat volitelný parametr záznamu, <code>možnosti</code>, a nastavit následujících možností:      <ul>        <li><code>ConnectionTimeout</code>: Časový interval, jak dlouho se má čekat, než se ukončí neúspěšný pokus o připojení k serveru. Výchozí nastavení je hodnota časového limitu připojení ODBC.</li>        <li><code>CommandTimeout</code>: Časový interval, jak dlouho může běžet dotaz na straně serveru, než se zruší.</li>        <li><code>BillingProject</code>: ID fakturačního projektu. Výchozí hodnota je první dostupný projekt.</li>      <li><code>UseStorageApi</code>: Určuje, jestli se má pro velké sady výsledků použít rozhraní API úložiště BigQuery. Výchozí hodnota true (pravda) znamená použít rozhraní API úložiště. Pokud rozhraní API úložiště používat nechcete, nastavte hodnotu false (nepravda).</li>      </ul>    Parametr záznamu se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].    


## Examples

### Example #1 
Vypíše dostupné projekty v Google BigQuery.
```powerquery
GoogleBigQuery.Database()
```



