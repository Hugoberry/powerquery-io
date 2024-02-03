---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

A feltétel által elfogadott identitások listáját adja vissza.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

A megadott <code>identityProvider</code> használatával a(z) <code>condition</code> elemet azon identitások listájává konvertálja, amelyekhez a(z) <code>condition</code> <code>true</code> értéket ad vissza minden engedélyezési környezetben, ha a(z) <code>identityProvider</code> az identitásszolgáltató. Hiba történik, ha nem lehet identitáslistává konvertálni a(z) <code>condition</code> elemet, például ha a(z) <code>condition</code> nem felhasználói vagy csoportidentitás-attribútumok alapján dönt.<br />    Vegye figyelembe, hogy az identitáslista úgy jelöli az identitásokat, ahogyan a(z) <code>condition</code> szolgáltatásban megjelennek, és nem történik rajtuk normalizálás (például csoportbővítés).<br />



## Category
Accessing data
