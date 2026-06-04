---
title: Sql.Database
---

# Sql.Database


Tiek atgriezta SQL tabulu, skatu un saglabāto funkciju tabula no SQL Server datu bāzes.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Atgriež servera `server` SQL Server datu bāzē `database` pieejamo SQL tabulu, skatu un iekļauto funkciju tabulu. Kopā ar serveri pēc izvēles var norādīt portu, atdalot to ar kolu vai komatu. Var norādīt neobligātu ieraksta parametru `options`, lai pārvaldītu tālāk minētās opcijas.

-   `Query` : Iekšējs SQL vaicājums, ko izmanto datu izgūšanai. Ja vaicājumam ir vairākas rezultātu kopas, tiek atgriezta tikai pirmā.
-   `CreateNavigationProperties` : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).
-   `NavigationPropertyNameGenerator` : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.
-   `MaxDegreeOfParallelism` : Skaitlis, kas iestata vaicājuma “maxdop” klauzulas vērtību ģenerētajā SQL vaicājumā.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.
-   `HierarchicalNavigation` : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).
-   `MultiSubnetFailover` : Loģiskā funkcija (true/false), kura nosaka rekvizīta MultiSubnetFailover vērtību savienojuma virknē (noklusējuma vērtība ir “false”).
-   `UnsafeTypeConversions` : Loģiska (true/false) vērtība, kas, ja ir true, mēģina īsināt tipu pārvēršanas, kas varētu neizdoties un izraisīt visa vaicājuma kļūmi. Nav ieteicams vispārējai lietošanai.
-   `ContextInfo` : Binārā vērtība, kas tiek izmantota, lai iestatītu CONTEXT\_INFO pirms katras komandas palaišanas.
-   `OmitSRID` : Loģiskā (true/false) vērtība, kura, ja tā ir true, izlaiž SRID, veidojot Well-Known Text no ģeometrijas un ģeogrāfijas tipiem.
-   `EnableCrossDatabaseFolding` : Ja loģiskā (true/false) vērtība ir iestatīta kā Patiess, tā atļauj vaicājumu īsināšanas piekļuvi datu bāzēm tajā pašā serverī. Noklusējuma vērtība ir iestatīta kā aplams.

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\] vai \[Query = "select ..."\].



## Category
Accessing data
