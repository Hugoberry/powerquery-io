---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Returnerer en liste over identiteter, som betingelsen accepterer.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Brug af den/det angivne <code>identityProvider</code> konverterer <code>condition</code> til listen over identiteter, som <code>condition</code> ville returnere <code>true</code> i alle autorisationskontekster med <code>identityProvider</code> som identitetsudbyderen. Der opstår en fejl, hvis det ikke er muligt at konvertere <code>condition</code> til en liste over identiteter, f.eks. hvis <code>condition</code> konsulterer andre attributter bruger- eller gruppeidentiteter til at træffe en afgørelse.<br />    Bemærk, at listen over identiteter repræsenterer identiteterne, som de vises i <code>condition</code>, og der udføres ingen normalisering (f.eks gruppeudvidelse) af dem.<br />



## Category
Accessing data
