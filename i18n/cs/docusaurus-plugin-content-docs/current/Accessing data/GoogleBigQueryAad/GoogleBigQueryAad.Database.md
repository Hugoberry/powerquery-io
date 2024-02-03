---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Umožňuje importovat data z databáze Google BigQuery pomocí Azure AD.


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Vrátí tabulku s výpisem dostupných projektů v Google BigQuery pomocí Azure AD pro <code>ID fakturačního projektu</code>. Jde zadat volitelný parametr záznamu, <code>možnosti</code>, a nastavit následujících možností:      <ul>        <li><code>ConnectionTimeout</code>: Časový interval, jak dlouho se má čekat, než se ukončí neúspěšný pokus o připojení k serveru. Výchozí hodnota je hodnota časového limitu připojení ODBC.</li>        <li><code>CommandTimeout</code>: Časový interval, jak dlouho může běžet dotaz na straně serveru, než se zruší.</li>        <li><code>UseStorageApi</code>: Určuje, jestli se má pro velké sady výsledků dotazu použít rozhraní API úložiště BigQuery. Výchozí hodnota true (pravda) znamená použít rozhraní API úložiště. Pokud rozhraní API úložiště používat nechcete, nastavte hodnotu false (nepravda).</li>        <li><code>AudienceUri</code>: Toto je identifikátor URI cílové skupiny, který může ovladač ODBC použít u svých žádostí o výměnu tokenů. Toto pole musí být plně kvalifikovaný identifikátor URI (tzn. //iam.googleapis.com/locations/global/workforcePools/$\{id_fondu}/providers/aad-provider), kde id_fondu je globálně jedinečný název, který identifikuje fond pracovních sil.</li>      </ul>    Parametr záznamu se zadává ve formátu [možnost1 = hodnota1, možnost2 = hodnota2...].    


## Examples

### Example #1 
Vypíše dostupné projekty v Google BigQuery pomocí Azure AD.
```powerquery
GoogleBigQueryAad.Database()
```



