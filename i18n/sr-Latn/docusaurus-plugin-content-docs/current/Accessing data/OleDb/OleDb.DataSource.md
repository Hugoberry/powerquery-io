---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Vraća tabelu sa SQL tabelama i prikazima iz OLE DB izvora podataka.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Vraća tabelu sa SQL tabelama i prikazima iz OLE DB izvora podataka koju je navela niska veze <code>connectionString</code>. <code>connectionString</code> može da bude tekst ili zapis parova vrednosti svojstva. Vrednosti svojstva mogu da budu tekst ili broj. Može se navesti opcionalni parametar zapisa, <code>options</code>, radi obezbeđivanja dodatnih svojstava. Zapis može da sadrži sledeća polja:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li><li><code>Query</code> : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.</li><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>SqlCompatibleWindowsAuth</code> : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.</li></ul>    Parametar zapisa se, na primer, navodi kao [opcija1 = vrednost1, opcija2 = vrednost2...] ili [Upit = „izaberi...“].



## Category
Accessing data
