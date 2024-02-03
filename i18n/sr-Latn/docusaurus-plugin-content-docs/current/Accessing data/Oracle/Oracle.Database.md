---
title: Oracle.Database
---

# Oracle.Database


## Description

Vraća tabelu SQL tabela i prikaza iz Oracle Database.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Details

Vraća tabelu SQL tabela i prikaza iz Oracle Database na serveru <code>server</code>. Uz server se opcionalno može navesti port, razdvojen pomoću dve tačke. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, za kontrolu sledećih opcija:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li><li><code>Query</code> : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li></ul>    Parametar zapisa se, na primer, navodi kao [option1 = value1, option2 = value2...] ili [Query = "select ..."].    



## Category
Accessing data
