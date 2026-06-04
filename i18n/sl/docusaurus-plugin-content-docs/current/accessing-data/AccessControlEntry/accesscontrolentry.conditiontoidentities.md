---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Vrne seznam identitet, ki jih bo sprejel pogoj.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Z uporabo navedene lastnosti `identityProvider` pretvori `condition` v seznam identitet, za katero bil `condition` vrnil `true` v vseh kontekstih odobritve, kjer je `identityProvider` ponudnik identitete. Prikaže se sporočilo o napaki, če `condition` ni mogoče pretvoriti v seznam identitet (če na primer `condition` za sprejem odločitve uporabi atribute, ki niso identitete uporabnikov ali skupin).

Upoštevajte, da seznam identitet predstavlja identitete, kot so prikazane v `condition`, za njih pa ni izvedena nobena normalizacija (kot je razširitev skupine).



## Category
Accessing data
