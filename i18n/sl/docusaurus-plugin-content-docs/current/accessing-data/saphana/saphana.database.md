---
title: SapHana.Database
---

# SapHana.Database


Vrne pakete v zbirki podatkov SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo večdimenzionalnih paketov iz zbirke podatkov `server` platforme SAP HANA. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `Query` : Izvorna poizvedba SQL, uporabljena za pridobitev podatkov. Če poizvedba pridobi več naborov rezultatov, bo vrnjen samo prvi nabor.
-   `Distribution` : SapHanaDistribution, ki nastavi vrednost lastnosti"Porazdelitev"v nizu povezave. Usmerjanje izjav je način ovrednotenja pravilnega vozlišča strežnika porazdeljenega sistema pred izvedbo izjave. Privzeta vrednost je"SapHanaDistribution.All".
-   `Implementation` : Določa izvedbo priključka SAP HANA za uporabo.
-   `EnableColumnBinding` : Poveže spremenljivke s stolpci nabora rezultatov SAP Hana pri pridobivanju podatkov. Lahko izboljša učinkovitost delovanja zaradi nekoliko večje uporabe pomnilnika. Privzeta vrednost je"false".
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je 15 sekund.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.



## Category
Accessing data
