---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Atgriež ADO.NET datu avota shēmu kolekciju.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Tiek atgriezta ADO.NET datu avota shēmu kolekcija ar nodrošinātāja nosaukumu <code>providerName</code> un savienojuma virkni <code>connectionString</code>. <code>connectionString</code> var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>SqlCompatibleWindowsAuth</code> : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL&#160;Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
