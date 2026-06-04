---
title: DB2.Database
---

# DB2.Database


Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Db2 v strežniku `server` v primerku zbirke podatkov z imenom `database`. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"true").
-   `NavigationPropertyNameGenerator` : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.
-   `Query` : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").
-   `Implementation` : Določa izvedbo ponudnika notranje zbirke podatkov, ki bo uporabljena. Veljavni vrednosti sta:"IBM"in"Microsoft".
-   `BinaryCodePage` : Številka za CCSID (identifikator nabora kodiranih znakov) za dekodiranje dvojiških podatkov Db2 FOR BIT v znakovne nize. Velja za izvedbo ="Microsoft". Nastavite na 0, če želite onemogočiti pretvorbo (privzeta nastavitev). Nastavite na 1, če želite pretvoriti na podlagi kodiranja zbirke podatkov. Nastavite drugo številko CCSID, če želite pretvoriti v kodiranje aplikacije.
-   `PackageCollection` : Določa vrednost niza za zbirko paketov (privzeta vrednost je"NULLID"), ki omogoči uporabo paketov v skupni rabi, potrebnih za obdelavo stavkov SQL. Velja le, če je možnost"Implementation"nastavljena na"Microsoft".
-   `UseDb2ConnectGateway` : Določa, ali je povezava vzpostavljena prek prehoda Db2 Connect. Velja za izvajanje ="Microsoft".

Parameter zapisa je na primer določen kot \[možnost1 = vrednost1, možnost2 = vrednost2 ...\] ali \[Query = "izberi ..."\].



## Category
Accessing data
