---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


A feltétel által elfogadott identitások listáját adja vissza.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

A megadott `identityProvider` használatával a(z) `condition` elemet azon identitások listájává konvertálja, amelyekhez a(z) `condition` `true` értéket ad vissza minden engedélyezési környezetben, ha a(z) `identityProvider` az identitásszolgáltató. Hiba történik, ha nem lehet identitáslistává konvertálni a(z) `condition` elemet, például ha a(z) `condition` nem felhasználói vagy csoportidentitás-attribútumok alapján dönt.

Vegye figyelembe, hogy az identitáslista úgy jelöli az identitásokat, ahogyan a(z) `condition` szolgáltatásban megjelennek, és nem történik rajtuk normalizálás (például csoportbővítés).



## Category
Accessing data
