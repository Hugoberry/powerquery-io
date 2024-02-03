---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov PostgreSQL v strežniku <code>server</code> v primerku zbirke podatkov z imenom <code>database</code>. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li><li><code>Query</code> : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li></ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2...] ali [Query = "select ..."].    



## Category
Accessing data
