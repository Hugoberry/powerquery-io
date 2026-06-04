---
title: DB2.Database
---

# DB2.Database


Vrátí tabulku tabulek a zobrazení SQL dostupných v databázi Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku tabulek a zobrazení SQL dostupných v databázi Db2 na serveru `server` v instanci databáze `database`. Společně se serverem se volitelně může zadat port oddělený dvojtečkou. Zadáním volitelného parametru záznamu `options` můžete řídit následující možnosti:

-   `CreateNavigationProperties` : Logický parametr (true/false), který nastavuje, jestli se mají u vrácených hodnot generovat navigační vlastnosti (výchozí hodnota je true).
-   `NavigationPropertyNameGenerator` : Funkce používaná ke generování názvů navigačních vlastností.
-   `Query` : Nativní dotaz SQL použitý k načtení dat. Pokud dotaz vyprodukuje více sad výsledků, bude vrácena jenom první.
-   `CommandTimeout` : Doba trvání, která řídí, jak dlouho může dotaz být dotaz na straně serveru spuštěný, než se zruší. Výchozí hodnota je 10 minut.
-   `ConnectionTimeout` : Doba trvání, která řídí, jak dlouho se má čekat, než se pokus o připojení k serveru opustí. Výchozí hodnota závisí na ovladači.
-   `HierarchicalNavigation` : Logický parametr (true/false), který nastavuje, jestli se mají tabulky zobrazit seskupené podle svých názvů schémat (výchozí hodnota je false).
-   `Implementation` : Určuje implementaci zprostředkovatele interní databáze, která se má použít. Platné hodnoty jsou: "IBM" a "Microsoft".
-   `BinaryCodePage` : Číslo pro identifikátor CCSID (Coded Character Set Identifier) k dekódování binárních dat Db2 FOR BIT na znakové řetězce. Platí pro Implementation = “Microsoft”. Nastavení hodnoty 0 zakáže konverzi (výchozí). Nastavení hodnoty 1 provede konverzi na základě kódování databáze. Nastavení jiného čísla CCSID provede konverzi na základě kódování aplikace.
-   `PackageCollection` : Určuje řetězcovou hodnotu pro kolekci balíčků (výchozí hodnota je NULLID), aby se umožnilo použití sdílených balíčků požadovaných pro zpracování příkazů SQL. Použije se pro Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Určuje, jestli se připojení uskutečňuje prostřednictvím brány Db2 Connect. Platí pro Implementation = "Microsoft".

Parametr záznamu se zadává například jako \[možnost1 = hodnota1, možnost2 = hodnota2...\] nebo \[Query = "select ..."\].



## Category
Accessing data
