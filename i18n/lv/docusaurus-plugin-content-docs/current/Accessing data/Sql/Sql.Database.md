---
title: Sql.Database
---

# Sql.Database


## Description

Tiek atgriezta SQL tabulu, skatu un saglabāto funkciju tabula no SQL Server datu bāzes.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Atgriež servera <code>server</code> SQL Server datu bāzē <code>database</code> pieejamo SQL tabulu, skatu un iekļauto funkciju tabulu. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu vai komatu. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk minētās opcijas.    <ul><li><code>Query</code> : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.</li><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>MaxDegreeOfParallelism</code> : Skaitlis, kas iestata vaicājuma “maxdop” klauzulas vērtību ģenerētajā SQL vaicājumā.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li><li><code>MultiSubnetFailover</code> : Loģiskā funkcija (true/false), kura nosaka rekvizīta MultiSubnetFailover vērtību savienojuma virknē (noklusējuma vērtība ir “false”).</li><li><code>UnsafeTypeConversions</code> : Loģiska (true/false) vērtība, kas, ja ir true, mēģina īsināt tipu pārvēršanas, kas varētu neizdoties un izraisīt visa vaicājuma kļūmi. Nav ieteicams vispārējai lietošanai.</li><li><code>ContextInfo</code> : Binārā vērtība, kas tiek izmantota, lai iestatītu CONTEXT_INFO pirms katras komandas palaišanas.</li><li><code>OmitSRID</code> : Loģiskā (true/false) vērtība, kura, ja tā ir true, izlaiž SRID, veidojot Well-Known Text no ģeometrijas un ģeogrāfijas tipiem.</li><li><code>EnableCrossDatabaseFolding</code> : Ja loģiskā (true/false) vērtība ir iestatīta kā Patiess, tā atļauj vaicājumu īsināšanas piekļuvi datu bāzēm tajā pašā serverī. Noklusējuma vērtība ir iestatīta kā aplams.</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...] vai [Query = "select ..."].    



## Category
Accessing data
