---
title: Sql.Databases
---

# Sql.Databases


## Description

Vraća tabelu sa bazama podataka na SQL Serveru.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Vraća tabelu baza podataka na navedenom SQL serveru, <code>server</code>. Moguće je navesti opcionalni parametar zapisa, <code>options</code>, za kontrolu sledećih opcija:    <ul><li><code>CreateNavigationProperties</code> : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija koja se koristi za pravljenje imena za svojstva navigacije.</li><li><code>MaxDegreeOfParallelism</code> : Broj koji određuje vrednost odredbe za upit „maxdop“ u generisanom SQL upitu.</li><li><code>CommandTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.</li><li><code>ConnectionTimeout</code> : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.</li><li><code>HierarchicalNavigation</code> : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).</li><li><code>MultiSubnetFailover</code> : Logička vrednost (true/false) koja određuje vrednost svojstva „MultiSubnetFailover“ u nisci veze (podrazumevana vrednost je false).</li><li><code>UnsafeTypeConversions</code> : Logička opcija (tačno/netačno) koja, ako ima vrednost „tačno“, pokušava da vrati tipove konverzije koji možda neće uspeti i koji bi izazvali neuspeh čitavog upita. Ne preporučuje se za opštu upotrebu.</li><li><code>ContextInfo</code> : Binarna vrednost koja se koristi za podešavanje opcije CONTEXT_INFO pre pokretanja svake komande.</li><li><code>OmitSRID</code> : Logička opcija (tačno/netačno) koja, ako ima vrednost „tačno“, izostavlja SRID kada proizvodi Well-Known Text iz tipova geometry i geography.</li><li><code>EnableCrossDatabaseFolding</code> : Logička (true/false) vrednost koja, ako ima vrednost „True“, dozvoljava vraćanje upita baza podataka na istom serveru. Podrazumevana vrednost je „False“.</li></ul>     Parametar zapisa se, na primer, navodi kao [opcija1 = vrednost1, opcija2 = vrednost2...].    <br />    Ne podržava postavljanje SQL upita za pokretanje na serveru. Umesto toga, treba koristiti <code>Sql.Database</code> za pokretanje SQL upita.    



## Category
Accessing data
