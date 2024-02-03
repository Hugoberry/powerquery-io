---
title: SapHana.Database
---

# SapHana.Database


## Description

Vraća pakete iz SAP HANA baze podataka.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Vraća tabelu višedimenzionalnih paketa iz SAP HANA baze podataka <code>server</code>. Opcionalni parametar zapisa <code>options</code> može biti naveden radi kontrolisanja sledećih opcija:    <ul><li><code>Query</code> : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.</li><li><code>Distribution</code> : Funkcija SapHanaDistribution koja podešava vrednost svojstva „Distribucija“ u niski veze. Usmeravanje instrukcije predstavlja metod procene ispravnog čvora servera distribuiranog sistema pre izvršenja instrukcije. Podrazumevana vrednost je SapHanaDistribution.All.</li><li><code>Implementation</code> : Navodi primenu SAP Hana konektora koji će biti korišćen.</li><li><code>EnableColumnBinding</code> : Povezuje promenljive sa kolonama skupa rezultata SAP Hana pri dobavljanju podataka. Potencijalno može poboljšati performanse po cenu malo veće iskorišćenosti memorije. Podrazumevana vrednost je netačna.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost je 15 sekundi.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li></ul>    



## Category
Accessing data
