---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Returnerar en lista med identiteter som villkoret accepterar.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Med de angivna `identityProvider` så konverteras `condition` till listan över identiteter som `condition` returnerar `sant` för i alla auktoriseringssammanhang med `identityProvider` som identitetsprovider. Ett fel skapas om det inte går att konvertera `condition` till en lista med identiteter, till exempel om `condition` konsulterar andra attribut än användar- eller gruppidentiteter för att fatta ett beslut.

Observera att listan med identiteter representerar identiteterna som de visas i `condition` och ingen normalisering (t.ex. grupputökning) utförs på dem.



## Category
Accessing data
