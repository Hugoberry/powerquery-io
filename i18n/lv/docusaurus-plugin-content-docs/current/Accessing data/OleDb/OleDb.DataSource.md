---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Atgriež no OLE DB datu avota tabulu ar SQL tabulām un skatiem.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Tiek atgriezta SQL tabulu un skatu tabula, kura ir iegūta no savienojuma virknē <code>connectionString</code> norādītā OLE DB datu avota. Parametra <code>connectionString</code> vērtība var būt teksts vai rekvizītu vērtību pāru ieraksts. Rekvizītu vērtības var būt teksts vai skaitlis. Lai precizētu papildu rekvizītus, var norādīt neobligātu ieraksta parametru <code>options</code>. Ierakstā var ietvert tālāk norādītos laukus.    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “true”).</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>SqlCompatibleWindowsAuth</code> : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL&#160;Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...] vai [Query = "select ..."].



## Category
Accessing data
