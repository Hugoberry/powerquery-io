---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Atgriež rezultātu, kas iegūts, izpildot vietēju vaicājumu ADO.NET datu avotā.


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

Izmantojot ADO.NET nodrošinātāju <code>providerName</code>, tiek atgriezts <code>query</code> palaišanas rezultāts ar savienojuma virkni <code>connectionString</code>. <code>connectionString</code> var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>SqlCompatibleWindowsAuth</code> : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL&#160;Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.</li></ul>



## Category
Accessing data
