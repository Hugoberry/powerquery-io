---
title: SapHana.Database
---

# SapHana.Database


Vraća pakete iz SAP HANA baze podataka.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu višedimenzionalnih paketa iz SAP HANA baze podataka `server`. Opcionalni parametar zapisa `options` može biti naveden radi kontrolisanja sledećih opcija:

-   `Query` : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.
-   `Distribution` : Funkcija SapHanaDistribution koja podešava vrednost svojstva „Distribucija“ u niski veze. Usmeravanje instrukcije predstavlja metod procene ispravnog čvora servera distribuiranog sistema pre izvršenja instrukcije. Podrazumevana vrednost je SapHanaDistribution.All.
-   `Implementation` : Navodi primenu SAP Hana konektora koji će biti korišćen.
-   `EnableColumnBinding` : Povezuje promenljive sa kolonama skupa rezultata SAP Hana pri dobavljanju podataka. Potencijalno može poboljšati performanse po cenu malo veće iskorišćenosti memorije. Podrazumevana vrednost je netačna.
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost je 15 sekundi.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.



## Category
Accessing data
