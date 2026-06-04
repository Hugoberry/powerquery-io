---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Import dat z databáze Google BigQuery pomocí Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku se seznamem dostupných projektů v Google BigQuery pomocí Microsoft Entra ID pro `ID fakturačního projektu` . Můžete zadat `možnosti`, což je volitelný parametr záznamu, který řídí následující možnosti:

-   `ConnectionTimeout`: Doba trvání, která určuje dobu čekání před opuštěním pokusu o připojení k serveru. Výchozí hodnota je hodnota časového limitu připojení ODBC.
-   `CommandTimeout`: Doba trvání, která určuje, jak dlouho může být dotaz na straně serveru spuštěn, než dojde k jeho zrušení.
-   `UseStorageApi`: Určuje, jestli se má pro velké sady výsledků použít rozhraní API úložiště BigQuery. Výchozí hodnota true (pravda) znamená použít rozhraní API úložiště. Pokud nechcete používat
rozhraní API služby Storage, nastavte hodnotu false.-   `AudienceUri`: Toto je identifikátor URI cílové skupiny, který může ovladač ODBC použít pro své žádosti o výměnu tokenů. Toto pole musí být plně kvalifikovaný identifikátor URI (tj. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), kde pool\_id je globálně jedinečný název pro identifikaci fondu pracovních sil.

Parametr záznamu je zadán jako \[možnost1 = hodnota1, možnost2 = hodnota2...\].


## Examples

### Example #1
Zobrazení seznamu dostupných projektů v Google BigQuery pomocí Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



