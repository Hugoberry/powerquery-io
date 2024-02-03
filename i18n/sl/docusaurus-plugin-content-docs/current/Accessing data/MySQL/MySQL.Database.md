---
title: MySQL.Database
---

# MySQL.Database


## Description

Vrne tabelo tabel, pogledov in shranjenih skalarnih funkcij SQL, ki so na voljo v zbirki podatkov MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo s tabelami, pogledi in shranjenimi skalarnimi funkcijami SQL, ki so na voljo v zbirki podatkov MySQL v strežniku <code>server</code> v primerku zbirke podatkov z imenom <code>database</code>. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>Encoding</code> : Vrednost TextEncoding, ki določa nabor znakov, uporabljenih za vseh poizvedb, ki so poslane v strežnik (privzeta je ničelna vrednost).</li><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li><li><code>Query</code> : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>TreatTinyAsBoolean</code> : Logična vrednost (true/false), ki določa, ali bodo stolpci &#187;tinyint&#171; v strežniku obravnavani kot logične vrednosti. Privzeta vrednost je &#187;true&#171;.</li><li><code>OldGuids</code> : Logična vrednost (true/false), ki določa, ali bodo stolpci &#187;char(36) (false)&#171; oz. stolpci &#187;binary(16) (true)&#171; obravnavani kot GUID-ji. Privzeta vrednost je &#187;false&#171;.</li><li><code>ReturnSingleDatabase</code> : Logična vrednost (true/false), ki nastavi, ali bodo vrnjene vse tabele vseh zbirk podatkov (če je vrednost &#187;false&#171;) oziroma tabele in pogledi določene zbirke podatkov (če je vrednost &#187;true&#171;). Privzeta vrednost je &#187;false&#171;.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li></ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2...] ali [Query = "select ..."].    



## Category
Accessing data
