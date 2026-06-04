---
title: Sql.Databases
---

# Sql.Databases


Vrne tabelo zbirk podatkov v strežniku SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo zbirk podatkov v navedenem strežniku SQL Server `server`. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"true").
-   `NavigationPropertyNameGenerator` : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.
-   `MaxDegreeOfParallelism` : Številka, s katero nastavite vrednost stavka poizvedbe"maxdop"v ustvarjeni poizvedbi strežnika SQL.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").
-   `MultiSubnetFailover` : Logična vrednost (true/false), ki nastavi vrednost lastnosti"MultiSubnetFailover"v nizu povezave (privzeta vrednost je"false").
-   `UnsafeTypeConversions` : Logična vrednost (true/false), ki poskusi pregibati pretvorbe vrste, če je"true". Ta funkcija morda ne bo uspela, zato morda ne bo uspela celotna poizvedba. Ni priporočeno za splošno uporabo.
-   `ContextInfo` : Dvojiška vrednost, uporabljena za nastavitev lastnosti CONTEXT\_INFO pred zagonom posameznega ukaza.
-   `OmitSRID` : Logična vrednost (true/false), ki izpusti SRID pri ustvarjanju dobro znanega besedila iz vrst geometrije in geografije, če je true.
-   `EnableCrossDatabaseFolding` : Logična vrednost (true/false). Če je"true", omogoča pregibanje poizvedb zbirke podatkov v istem strežniku. Privzeta vrednost je"false".

Parameter zapisa je na primer naveden kot \[možnost1 = vrednost1, možnost2 = vrednost2...\].  
  
Ne podpira nastavitve poizvedbe SQL za zagon v strežniku. `Sql.Database` uporabite za zagon poizvedbe SQL.



## Category
Accessing data
