---
title: SapHana.Database
---

# SapHana.Database


## Description

Vrne pakete v zbirki podatkov SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Vrne tabelo večdimenzionalnih paketov iz zbirke podatkov <code>server</code> platforme SAP HANA. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>Query</code> : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.</li><li><code>Distribution</code> : SapHanaDistribution, ki nastavi vrednost lastnosti &#187;Porazdelitev&#171; v nizu povezave. Usmerjanje izjav je način ovrednotenja pravilnega vozlišča strežnika porazdeljenega sistema pred izvedbo izjave. Privzeta vrednost je &#187;SapHanaDistribution.All&#171;.</li><li><code>Implementation</code> : Določa izvedbo priključka SAP HANA za uporabo.</li><li><code>EnableColumnBinding</code> : Poveže spremenljivke s stolpci nabora rezultatov SAP Hana pri pridobivanju podatkov. Lahko izboljša učinkovitost delovanja zaradi nekoliko večje uporabe pomnilnika. Privzeta vrednost je &#187;false&#171;.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je 15 sekund.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li></ul>    



## Category
Accessing data
