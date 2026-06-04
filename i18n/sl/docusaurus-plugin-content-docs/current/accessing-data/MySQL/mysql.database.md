---
title: MySQL.Database
---

# MySQL.Database


Vrne tabelo tabel, pogledov in shranjenih skalarnih funkcij SQL, ki so na voljo v zbirki podatkov MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo s tabelami, pogledi in shranjenimi skalarnimi funkcijami SQL, ki so na voljo v zbirki podatkov MySQL v strežniku `server` v primerku zbirke podatkov z imenom `database`. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `Encoding` : Vrednost TextEncoding, ki določa nabor znakov, uporabljenih za vseh poizvedb, ki so poslane v strežnik (privzeta je ničelna vrednost).
-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"true").
-   `NavigationPropertyNameGenerator` : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.
-   `Query` : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `TreatTinyAsBoolean` : Logična vrednost (true/false), ki določa, ali bodo stolpci"tinyint"v strežniku obravnavani kot logične vrednosti. Privzeta vrednost je"true".
-   `OldGuids` : Logična vrednost (true/false), ki določa, ali bodo stolpci"char(36) (false)"oz. stolpci"binary(16) (true)"obravnavani kot GUID-ji. Privzeta vrednost je"false".
-   `ReturnSingleDatabase` : Logična vrednost (true/false), ki nastavi, ali bodo vrnjene vse tabele vseh zbirk podatkov (če je vrednost"false") oziroma tabele in pogledi določene zbirke podatkov (če je vrednost"true"). Privzeta vrednost je"false".
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").

Parameter zapisa je na primer določen kot \[možnost1 = vrednost1, možnost2 = vrednost2 ...\] ali \[Query = "izberi ..."\].



## Category
Accessing data
