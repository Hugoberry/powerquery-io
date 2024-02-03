---
title: MySQL.Database
---

# MySQL.Database


## Description

Vraća tabelu SQL tabela, prikaza i uskladištenih skalarnih funkcija dostupnih u MySQL bazi podataka.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vraća tabelu SQL tabela, prikaza i uskladištenih skalarnih funkcija dostupnih u MySQL bazi podataka na serveru <code>server</code> u instanci baze podataka pod imenom <code>database</code>. Uz server se opcionalno može navesti port, razdvojen pomoću dve tačke. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, za kontrolu sledećih opcija:    <ul><li><code>Encoding</code> : Vrednost TextEncoding koja određuje skup znakova koji se koristi za kodiranje svih upita poslatih na server (podrazumevana vrednost je null).</li><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li><li><code>Query</code> : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>TreatTinyAsBoolean</code> : Logička vrednost (true/false) koja određuje da li će se nametnuti pokretanje tinyint kolona na serveru kao logičkih vrednosti. Podrazumevana vrednost je true.</li><li><code>OldGuids</code> : Logička vrednost (true/false) koja određuje da li će se char(36) kolone (ako je vrednost false) ili binary(16) kolone (ako je vrednost true) tretirati kao GUID-ovi. Podrazumevana vrednost je false.</li><li><code>ReturnSingleDatabase</code> : Logička vrednost (true/false) koja određuje da li će se vratiti sve tabele svih baza podataka (ako je vrednost false) ili će se vratiti tabele i prikazi navedene baze podataka (ako je vrednost true). Podrazumevana vrednost je false.</li><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li></ul>    Parametar zapisa se, na primer, navodi kao [option1 = value1, option2 = value2...] ili [Query = "select ..."].    



## Category
Accessing data
