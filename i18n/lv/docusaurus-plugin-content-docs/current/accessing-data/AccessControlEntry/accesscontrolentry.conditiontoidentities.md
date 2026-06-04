---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Tiek atgriezts to identitāšu saraksts, kas tiks akceptētas saskaņā ar nosacījumu.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Izmantojot norādīto `identityProvider`, konvertē `condition` identitāšu sarakstā, kam `condition` atgriež vērtību `true` visos atļaujas kontekstos, kuros identitātes nodrošinātājs ir `identityProvider`. Kļūda rodas tad, ja `condition` neizdodas konvertēt identitāšu sarakstā, piemēram, ja lēmuma pieņemšanā `condition` izmanto atribūtus, kas nav lietotāja vai grupas identitātes.

Ņemiet vērā, ka identitāšu sarakstā identitātes tiek iekļautas tādas, kādas tās ir `condition`, un tām netiek veiktas nekādas normalizēšanas darbības (piemēram, grupas paplašināšana).



## Category
Accessing data
