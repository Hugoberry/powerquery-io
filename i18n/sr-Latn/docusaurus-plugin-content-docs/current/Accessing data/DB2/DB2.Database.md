---
title: DB2.Database
---

# DB2.Database


## Description

Vraća tabelu SQL tabela i prikaza dostupnih u Db2 bazi podataka.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vraća tabelu SQL tabela i prikaza dostupnih u Db2 bazi podataka na serveru <code>server</code> u instanci baze podataka pod imenom <code>database</code>. Uz server se opcionalno može navesti port, razdvojen pomoću dve tačke. Može se navesti opcionalni parametar zapisa, <code>options</code>, radi kontrole sledećih opcija:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li><li><code>Query</code> : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li><li><code>Implementation</code> : Navodi primenu internog dobavljača baze podataka koja će se koristiti. Važeće vrednosti su: „IBM“ i „Microsoft“.</li><li><code>BinaryCodePage</code> : Broj pomoću kojeg CCSID (kodirani identifikator skupa znakova) dešifruje Db2 FOR BIT binarne podatke u niske znakova. Važi ako je Implementation = „Microsoft“. Podesite na 0 da biste onemogućili konverziju (podrazumevano). Podesite na 1 da biste konvertovali na osnovu kodiranja baze podataka. Podesite CCSID na neki drugi broj da biste konvertovali u kodiranje aplikacije.</li><li><code>PackageCollection</code> : Navodi vrednost niske za kolekciju paketa (podrazumevana vrednost je „NULLID“) kako bi se omogućila upotreba deljenih paketa potrebnih za obradu SQL izjava.&#160;Važi ako je Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Određuje da li se veza uspostavlja preko Db2 Connect mrežnog prolaza. Važi za „Implementation = &quot;Microsoft&quot;“.</li></ul>    Parametar zapisa se, na primer, navodi kao [opcija1 = vrednost1, opcija2 = vrednost2...] ili [Upit = „izaberite...“].    



## Category
Accessing data
