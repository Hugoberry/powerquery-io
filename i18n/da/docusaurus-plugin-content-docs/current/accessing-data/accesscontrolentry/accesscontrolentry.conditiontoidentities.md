---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Returnerer en liste over identiteter, som betingelsen accepterer.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Brug af den/det angivne `identityProvider` konverterer `condition` til listen over identiteter, som `condition` ville returnere `true` i alle autorisationskontekster med `identityProvider` som identitetsudbyderen. Der opstår en fejl, hvis det ikke er muligt at konvertere `condition` til en liste over identiteter, f.eks. hvis `condition` konsulterer andre attributter bruger- eller gruppeidentiteter til at træffe en afgørelse.

Bemærk, at listen over identiteter repræsenterer identiteterne, som de vises i `condition`, og der udføres ingen normalisering (f.eks gruppeudvidelse) af dem.



## Category
Accessing data
