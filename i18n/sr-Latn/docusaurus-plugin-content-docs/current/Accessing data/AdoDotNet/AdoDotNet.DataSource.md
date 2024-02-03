---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Vraća kolekciju šema za ADO.NET izvor podataka.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Vraća kolekciju šema za ADO.NET izvor podataka sa imenom dobavljača <code>providerName</code> i niskom veze <code>connectionString</code>. <code>connectionString</code> može da bude tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, <code>options</code>, može biti naveden radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:    <ul><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>SqlCompatibleWindowsAuth</code> : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
