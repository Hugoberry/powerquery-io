---
title: OleDb.Query
---

# OleDb.Query


## Description

Atgriež rezultātu, kas iegūts, palaižot iekšēju vaicājumu OLE DB datu avotā.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Izmantojot OLE DB, tiek atgriezts <code>query</code> palaišanas rezultāts ar savienojuma virkni <code>connectionString</code>. <code>connectionString</code> var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs <code>options</code>. Ierakstā var būt šādi lauki:    <ul><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>SqlCompatibleWindowsAuth</code> : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL&#160;Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.</li></ul>



## Category
Accessing data
