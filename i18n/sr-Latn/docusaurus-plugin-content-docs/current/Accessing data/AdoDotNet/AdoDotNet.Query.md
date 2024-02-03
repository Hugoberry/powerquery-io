---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Vraća rezultat pokretanja osnovnog upita na ADO.NET izvoru podataka.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Vraća rezultat pokretanja <code>query</code> uz nisku veze <code>connectionString</code> pomoću ADO.NET dobavljača <code>providerName</code>. <code>connectionString</code> može da bude tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, <code>options</code>, može biti naveden radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:    <ul><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>SqlCompatibleWindowsAuth</code> : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.</li></ul>



## Category
Accessing data
