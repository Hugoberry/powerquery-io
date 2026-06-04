---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Pateikia tapatybių, kurias priims sąlyga, sąrašą.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Naudojant nurodytą `identityProvider`, `condition` konvertuojamas į tapatybių, kurių reikšmę `„true“` `condition` turi pateikti visuose autorizavimo kontekstuose, kai `identityProvider` naudojamas kaip tapatybės teikimo įrankis, sąrašą. Jei `condition` neįmanoma konvertuoti į tapatybių sąrašą, parodoma klaida, pvz., jei priimdamas sprendimą `condition` atsižvelgia į kitus atributus, o ne vartotojų arba grupių tapatybės.

Atkreipkite dėmesį, kad tapatybių sąraše tapatybės rodomos taip pat, kaip ir `condition` netaikant joms jokio normalizavimo (pvz., grupės išplėtimo).



## Category
Accessing data
