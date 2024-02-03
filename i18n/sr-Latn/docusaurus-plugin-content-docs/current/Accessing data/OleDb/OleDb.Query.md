---
title: OleDb.Query
---

# OleDb.Query


## Description

Vraća rezultat pokretanja osnovnog upita na OLE DB izvoru podataka.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vraća rezultat pokretanja <code>query</code> sa niskom veze <code>connectionString</code> pomoću interfejsa OLE DB. <code>connectionString</code> može da bude tekst ili zapis parova vrednosti svojstva. Vrednosti svojstva mogu da budu tekst ili broj. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:    <ul><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>SqlCompatibleWindowsAuth</code> : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.</li></ul>



## Category
Accessing data
