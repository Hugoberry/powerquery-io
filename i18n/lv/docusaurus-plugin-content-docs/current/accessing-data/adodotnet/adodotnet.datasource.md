---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Atgriež ADO.NET datu avota shēmu kolekciju.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta ADO.NET datu avota shēmu kolekcija ar nodrošinātāja nosaukumu `providerName` un savienojuma virkni `connectionString`. `connectionString` var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs `options`. Ierakstā var būt šādi lauki:

-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `SqlCompatibleWindowsAuth` : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.
-   `TypeMap`



## Category
Accessing data
