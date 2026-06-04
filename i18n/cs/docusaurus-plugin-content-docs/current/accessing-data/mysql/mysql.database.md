---
title: MySQL.Database
---

# MySQL.Database


Vrátí tabulku tabulek, zobrazení a uložených skalárních funkcí SQL dostupných v databázi MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek, zobrazení a uložených skalárních funkcí SQL dostupných v databázi MySQL na serveru `server` v instanci databáze `database`. Společně se serverem se volitelně může zadat port oddělený dvojtečkou. Zadáním volitelného parametru záznamu `options` můžete řídit následující možnosti:

-   `Encoding` : Hodnota TextEncoding, která určuje znakovou sadu použitou ke kódování všech dotazů odeslaných na server (výchozí hodnota je null).
-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.
-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `TreatTinyAsBoolean` : Logický parametr (true/false), který určuje, jestli mají být sloupce tinyint na serveru vynuceny jako logické hodnoty. Výchozí hodnota je true.
-   `OldGuids` : Logický parametr (true/false), který nastavuje, jestli budou brány jako identifikátory GUID sloupce char(36) (při false) nebo sloupce binary(16) (při true). Výchozí hodnota je false.
-   `ReturnSingleDatabase` : Logický parametr (true/false), který nastavuje, jestli mají být vráceny všechny tabulky ze všech databází (false), nebo tabulky a zobrazení ze zadané databáze (true). Výchozí hodnota je false.
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).

Parametr záznamu se zadává například jako \[možnost1 = hodnota1, možnost2 = hodnota2...\] nebo \[Query = "select ..."\].



## Category
Accessing data
