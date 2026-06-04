---
title: Teradata.Database
---

# Teradata.Database


Vrátí tabulku tabulek a zobrazení SQL z databáze Teradata.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek a zobrazení SQL z databáze Teradata na serveru `server`. Společně se serverem se volitelně může zadat port oddělený dvojtečkou. Zadáním volitelného parametru záznamu `options` můžete řídit následující možnosti:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.
-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).

Parametr záznamu se zadává například jako \[možnost1 = hodnota1, možnost2 = hodnota2...\] nebo \[Query = "select ..."\].



## Category
Accessing data
