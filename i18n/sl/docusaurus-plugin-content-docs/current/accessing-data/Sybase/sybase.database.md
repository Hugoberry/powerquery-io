---
title: Sybase.Database
---

# Sybase.Database


Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Sybase.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Sybase v strežniku `server` v primerku zbirke podatkov z imenom `database`. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"true").
-   `NavigationPropertyNameGenerator` : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.
-   `Query` : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").

Parameter zapisa je na primer določen kot \[možnost1 = vrednost1, možnost2 = vrednost2 ...\] ali \[Query = "izberi ..."\].



## Category
Accessing data
