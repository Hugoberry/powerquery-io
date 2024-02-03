---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Vraća pakete izveštaja u usluzi Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Vraća tabelu višedimenzionalnih paketa iz usluge Adobe Analytics. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, radi kontrole sledećih opcija:    <ul><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li><li><code>MaxRetryCount</code> : Broj ponovnih pokušaja prilikom prikupljanja rezultata upita. Podrazumevana vrednost je 120.</li><li><code>RetryInterval</code> : Vreme koje protekne između ponovnih pokušaja. Podrazumevana vrednost je 1 sekunda.</li><li><code>Implementation</code> : Navodi API verziju usluge Adobe Analytics. Važeće vrednosti su: „2.0“. Podrazumevano koristi API verziju 1.4.</li></ul>    



## Category
Accessing data
