---
title: AdoDotNet.Query
---

# AdoDotNet.Query


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


## Remarks

Izmantojot ADO.NET nodrošinātāju `providerName`, tiek atgriezts `query` palaišanas rezultāts ar savienojuma virkni `connectionString`. `connectionString` var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs `options`. Ierakstā var būt šādi lauki:

-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `SqlCompatibleWindowsAuth` : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.



## Category
Accessing data
