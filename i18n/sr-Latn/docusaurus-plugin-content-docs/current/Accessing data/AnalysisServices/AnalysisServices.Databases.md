---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Vraća Analysis Services baze podataka u određeni host.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Vraća baze podataka u Analysis Services instancu, <code>server</code>. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>TypedMeasureColumns</code> : Logička vrednost koja naznačava da li će tipovi navedeni u višedimenzionalnom ili tabelarnom modelu biti korišćeni za tipove dodatih kolona mera. Kada je postavljen na false, tip „broj“ biće korišćen za sve kolone mera. Podrazumevana vrednost za ovu opciju je false.</li><li><code>Culture</code> : Ime kulture koje navodi kulturu za podatke. To odgovara svojstvu niske veze „Locale Identifier“.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>SubQueries</code> : Broj (0, 1 ili 2) kojim se određuje vrednost svojstva „SubQueries“ u nisci veze. Time se kontroliše ponašanje izračunatih članova za podizbore ili podkocke. (Podrazumevana vrednost je 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
