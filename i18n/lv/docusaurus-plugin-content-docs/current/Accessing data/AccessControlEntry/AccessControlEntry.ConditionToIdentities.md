---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Tiek atgriezts to identitāšu saraksts, kas tiks akceptētas saskaņā ar nosacījumu.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Izmantojot norādīto <code>identityProvider</code>, konvertē <code>condition</code> identitāšu sarakstā, kam <code>condition</code> atgriež vērtību <code>true</code> visos atļaujas kontekstos, kuros identitātes nodrošinātājs ir <code>identityProvider</code>. Kļūda rodas tad, ja <code>condition</code> neizdodas konvertēt identitāšu sarakstā, piemēram, ja lēmuma pieņemšanā <code>condition</code> izmanto atribūtus, kas nav lietotāja vai grupas identitātes.<br />    Ņemiet vērā, ka identitāšu sarakstā identitātes tiek iekļautas tādas, kādas tās ir <code>condition</code>, un tām netiek veiktas nekādas normalizēšanas darbības (piemēram, grupas paplašināšana).<br />



## Category
Accessing data
