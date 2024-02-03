---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Returnerar en lista med identiteter som villkoret accepterar.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Med de angivna <code>identityProvider</code> så konverteras <code>condition</code> till listan över identiteter som <code>condition</code> returnerar <code>sant</code> för i alla auktoriseringssammanhang med <code>identityProvider</code> som identitetsprovider. Ett fel skapas om det inte går att konvertera <code>condition</code> till en lista med identiteter, till exempel om <code>condition</code> konsulterar andra attribut än användar- eller gruppidentiteter för att fatta ett beslut.<br />    Observera att listan med identiteter representerar identiteterna som de visas i <code>condition</code> och ingen normalisering (t.ex. grupputökning) utförs på dem.<br />



## Category
Accessing data
