---
title: Sql.Databases
---

# Sql.Databases


Tiek atgriezta tabula, kurā ir ietvertas SQL Server serverī esošās datu bāzes.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Atgriež tabulu, kurā ir uzskaitītas norādītajā SQL serverī `server`esošās datu bāzes. Var norādīt neobligātu ieraksta parametru `options`, lai kontrolētu tālāk norādītās opcijas.

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

Ieraksta parametrs tiek norādīts, piemēram, šādi: \[option1 = value1, option2 = value2...\].  
  
Netiek atbalstīta SQL vaicājuma iestatīšana, lai tas darbotos serverī. Lai izpildītu SQL vaicājumu, tā vietā jāizmanto komanda `Sql.Database`.



## Category
Accessing data
