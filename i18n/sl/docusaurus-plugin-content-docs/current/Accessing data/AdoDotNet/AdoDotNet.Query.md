---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Vrne rezultat izvajajoče se izvorne poizvedbe v viru podatkov ADO.NET.


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

Vrne rezultat izvajajoče se poizvedbe <code>query</code> z nizom povezave <code>connectionString</code>, ki uporablja ponudnika ADO.NET <code>providerName</code>. <code>connectionString</code> je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali številka. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:    <ul><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.</li><li><code>SqlCompatibleWindowsAuth</code> : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je &#187;true&#171;.</li></ul>



## Category
Accessing data
