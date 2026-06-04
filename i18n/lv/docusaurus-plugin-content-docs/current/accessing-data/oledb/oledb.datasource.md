---
title: OleDb.DataSource
---

# OleDb.DataSource


Atgriež no OLE DB datu avota tabulu ar SQL tabulām un skatiem.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta SQL tabulu un skatu tabula, kura ir iegūta no savienojuma virknē `connectionString` norādītā OLE DB datu avota. Parametra `connectionString` vērtība var būt teksts vai rekvizītu vērtību pāru ieraksts. Rekvizītu vērtības var būt teksts vai skaitlis. Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru `options`. Ierakstā var ietvert tālāk norādītos laukus.

-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “true”).
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `SqlCompatibleWindowsAuth` : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\] vai \[Query = "select ..."\].



## Category
Accessing data
