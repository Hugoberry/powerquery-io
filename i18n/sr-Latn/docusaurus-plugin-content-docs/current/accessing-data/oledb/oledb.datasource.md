---
title: OleDb.DataSource
---

# OleDb.DataSource


Vraća tabelu sa SQL tabelama i prikazima iz OLE DB izvora podataka.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vraća tabelu sa SQL tabelama i prikazima iz OLE DB izvora podataka koju je navela niska veze `connectionString`. `connectionString` može biti tekst ili zapis parova vrednosti svojstva. Vrednosti svojstva mogu da budu tekst ili broj. Moguće je navesti opcionalni parametar zapisa, `options`, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `CreateNavigationProperties` : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).
-   `NavigationPropertyNameGenerator` : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.
-   `Query` : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.
-   `HierarchicalNavigation` : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.

Parametar zapisa se, na primer, navodi kao \[opcija1 = vrednost1, opcija2 = vrednost2...\] ili \[Upit = „izaberi...“\].



## Category
Accessing data
