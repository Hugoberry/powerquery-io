---
title: Sql.Database
---

# Sql.Database


Vraća tabelu SQL tabela, prikaza i uskladištenih funkcija iz SQL Server baze podataka.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu SQL tabela, prikaza i uskladištenih funkcija iz SQL Server baze podataka `database` na serveru `server`. Uz server se opcionalno može navesti port, razdvojen pomoću dve tačke ili zareza. Može se navesti opciona vrednost parametra zapisa, `options`, za kontrolu sledećih opcija:

-   `Query` : Osnovni MDX upit koji se koristi za preuzimanje podataka. Ako upit napravi više skupova rezultata, vraća se samo prvi.
-   `CreateNavigationProperties` : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).
-   `NavigationPropertyNameGenerator` : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.
-   `MaxDegreeOfParallelism` : Broj koji određuje vrednost odredbe za upit „maxdop“ u generisanom SQL upitu.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `HierarchicalNavigation` : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).
-   `MultiSubnetFailover` : Logička vrednost (true/false) koja određuje vrednost svojstva „MultiSubnetFailover“ u nisci veze (podrazumevana vrednost je false).
-   `UnsafeTypeConversions` : Logička opcija (tačno/netačno) koja, ako ima vrednost „tačno“, pokušava da vrati tipove konverzije koji možda neće uspeti i koji bi izazvali neuspeh čitavog upita. Ne preporučuje se za opštu upotrebu.
-   `ContextInfo` : Binarna vrednost koja se koristi za podešavanje opcije CONTEXT\_INFO pre pokretanja svake komande.
-   `OmitSRID` : Logička opcija (tačno/netačno) koja, ako ima vrednost „tačno“, izostavlja SRID kada proizvodi Well-Known Text iz tipova geometry i geography.
-   `EnableCrossDatabaseFolding` : Logička (true/false) vrednost koja, ako ima vrednost „True“, dozvoljava vraćanje upita baza podataka na istom serveru. Podrazumevana vrednost je „False“.

Parametar zapisa se, na primer, navodi kao \[opcija1 = vrednost1, opcija2 = vrednost2...\] ili \[Upit = „izaberi...“\].



## Category
Accessing data
