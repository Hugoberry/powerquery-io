---
title: OleDb.DataSource
---

# OleDb.DataSource


Vrátí tabulku tabulek a zobrazení SQL ze zdroje dat OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek a zobrazení SQL z OLE DB zdroje dat určeného připojovacím řetězcem `connectionString`. `connectionString` může být text nebo záznam párů hodnot vlastností. Hodnoty vlastností můžou být textové nebo číselné. K zadání dalších vlastností lze zadat volitelný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.
-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je true).
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `SqlCompatibleWindowsAuth` : Logická hodnota (true/false), která určuje, jestli se mají generovat možnosti připojovacího řetězce pro ověřování systému Windows (kompatibilní se SQL Serverem). Výchozí hodnota je true.

Parametr záznamu se zadává například jako \[možnost1 = hodnota1, možnost2 = hodnota2...\] nebo \[Query = "select ..."\].



## Category
Accessing data
