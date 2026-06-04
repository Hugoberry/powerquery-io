---
title: MySQL.Database
---

# MySQL.Database


Vraća tabelu SQL tabela, prikaza i uskladištenih skalarnih funkcija dostupnih u MySQL bazi podataka.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu SQL tabela, prikaza i uskladištenih skalarnih funkcija dostupnih u MySQL bazi podataka na serveru `server` u instanci baze podataka pod imenom `database`. Uz server se opcionalno može navesti port, razdvojen pomoću dve tačke. Može se navesti opciona vrednost parametra zapisa, `options`, za kontrolu sledećih opcija:

-   `Encoding` : Vrednost TextEncoding koja određuje skup znakova koji se koristi za kodiranje svih upita poslatih na server (podrazumevana vrednost je null).
-   `CreateNavigationProperties` : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).
-   `NavigationPropertyNameGenerator` : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.
-   `Query` : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `TreatTinyAsBoolean` : Logička vrednost (true/false) koja određuje da li će se nametnuti pokretanje tinyint kolona na serveru kao logičkih vrednosti. Podrazumevana vrednost je true.
-   `OldGuids` : Logička vrednost (true/false) koja određuje da li će se char(36) kolone (ako je vrednost false) ili binary(16) kolone (ako je vrednost true) tretirati kao GUID-ovi. Podrazumevana vrednost je false.
-   `ReturnSingleDatabase` : Logička vrednost (true/false) koja određuje da li će se vratiti sve tabele svih baza podataka (ako je vrednost false) ili će se vratiti tabele i prikazi navedene baze podataka (ako je vrednost true). Podrazumevana vrednost je false.
-   `HierarchicalNavigation` : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).

Parametar zapisa se, na primer, navodi kao \[opcija1 = vrednost1, opcija2 = vrednost2...\] ili \[Upit = „izaberi...“\].



## Category
Accessing data
