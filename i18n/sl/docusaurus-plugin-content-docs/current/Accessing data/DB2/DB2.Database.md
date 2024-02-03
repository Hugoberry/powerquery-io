---
title: DB2.Database
---

# DB2.Database


## Description

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo tabel in pogledov SQL, ki so na voljo v zbirki podatkov Db2 v strežniku <code>server</code> v primerku zbirke podatkov z imenom <code>database</code>. S strežnikom lahko izbirno določite vrata, ki jih ločite z dvopičjem. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>CreateNavigationProperties</code> : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je &#187;true&#171;).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ki se uporablja za ustvarjanje imen lastnosti krmarjenja.</li><li><code>Query</code> : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>HierarchicalNavigation</code> : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je &#187;false&#171;).</li><li><code>Implementation</code> : Določa izvedbo ponudnika notranje zbirke podatkov, ki bo uporabljena. Veljavni vrednosti sta: &#187;IBM&#171; in &#187;Microsoft&#171;.</li><li><code>BinaryCodePage</code> : Številka za CCSID (identifikator nabora kodiranih znakov) za dekodiranje dvojiških podatkov Db2 FOR BIT v znakovne nize. Velja za izvedbo = &#187;Microsoft&#171;. Nastavite na 0, če želite onemogočiti pretvorbo (privzeta nastavitev). Nastavite na 1, če želite pretvoriti na podlagi kodiranja zbirke podatkov. Nastavite drugo številko CCSID, če želite pretvoriti v kodiranje aplikacije.</li><li><code>PackageCollection</code> : Določa vrednost niza za zbirko paketov (privzeta vrednost je &#187;NULLID&#171;), ki omogoči uporabo paketov v skupni rabi, potrebnih za obdelavo stavkov SQL. Velja le, če je možnost &#187;Implementation&#171; nastavljena na &#187;Microsoft&#171;.</li><li><code>UseDb2ConnectGateway</code> : Določa, ali je povezava vzpostavljena prek prehoda Db2 Connect. Velja za izvajanje = &#187;Microsoft&#171;.</li></ul>    Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2...] ali [Query = "select ..."].    



## Category
Accessing data
