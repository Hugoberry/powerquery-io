---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Returnează o listă de identități pe care le va accepta condiția.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Utilizând `identityProvider` specificat, convertește `condition` în lista de identități pentru care `condition` ar returna `true` în toate contextele de autorizare cu `identityProvider` ca furnizor de identitate. Apare o eroare dacă nu se poate converti `condition` într-o listă de identități, de exemplu, dacă `condition` consultă atribute diferite de identitățile de utilizator sau de grup pentru a lua o decizie.

Rețineți că lista de identități reprezintă identitățile așa cum apar în `condition` și nicio normalizare (cum ar fi extinderea grupului) nu se efectuează asupra lor.



## Category
Accessing data
