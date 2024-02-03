---
title: Sql.Databases
---

# Sql.Databases


## Description

Tiek atgriezta tabula, kurā ir ietvertas SQL Server serverī esošās datu bāzes.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Atgriež tabulu, kurā ir uzskaitītas norādītajā SQL serverī <code>server</code> esošās datu bāzes. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu tālāk norādītās opcijas.    <ul><li><code>CreateNavigationProperties</code> : Loģiskā funkcija (true/false), kura nosaka, vai ir jāveido atgriezto vērtību navigācijas rekvizīti (noklusējuma vērtība ir “true”).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, ko izmanto navigācijas rekvizītu nosaukumu izveidē.</li><li><code>MaxDegreeOfParallelism</code> : Skaitlis, kas iestata vaicājuma “maxdop” klauzulas vērtību ģenerētajā SQL vaicājumā.</li><li><code>CommandTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.</li><li><code>ConnectionTimeout</code> : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir atkarīga no draivera.</li><li><code>HierarchicalNavigation</code> : Loģiskā funkcija (true/false), kura nosaka, vai skatīt tabulas, grupējot pēc shēmu nosaukumiem (noklusējuma vērtība ir “false”).</li><li><code>MultiSubnetFailover</code> : Loģiskā funkcija (true/false), kura nosaka rekvizīta MultiSubnetFailover vērtību savienojuma virknē (noklusējuma vērtība ir “false”).</li><li><code>UnsafeTypeConversions</code> : Loģiska (true/false) vērtība, kas, ja ir true, mēģina īsināt tipu pārvēršanas, kas varētu neizdoties un izraisīt visa vaicājuma kļūmi. Nav ieteicams vispārējai lietošanai.</li><li><code>ContextInfo</code> : Binārā vērtība, kas tiek izmantota, lai iestatītu CONTEXT_INFO pirms katras komandas palaišanas.</li><li><code>OmitSRID</code> : Loģiskā (true/false) vērtība, kura, ja tā ir true, izlaiž SRID, veidojot Well-Known Text no ģeometrijas un ģeogrāfijas tipiem.</li><li><code>EnableCrossDatabaseFolding</code> : Ja loģiskā (true/false) vērtība ir iestatīta kā Patiess, tā atļauj vaicājumu īsināšanas piekļuvi datu bāzēm tajā pašā serverī. Noklusējuma vērtība ir iestatīta kā aplams.</li></ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [option1 = value1, option2 = value2...].    <br />    Netiek atbalstīta SQL vaicājuma iestatīšana, lai tas darbotos serverī. Lai izpildītu SQL vaicājumu, tā vietā jāizmanto komanda <code>Sql.Database</code>.    



## Category
Accessing data
