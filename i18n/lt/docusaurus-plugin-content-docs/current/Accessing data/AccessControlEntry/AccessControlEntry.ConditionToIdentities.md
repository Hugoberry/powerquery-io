---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Pateikia tapatybių, kurias priims sąlyga, sąrašą.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Naudojant nurodytą <code>identityProvider</code>, <code>condition</code> konvertuojamas į tapatybių, kurių reikšmę <code>„true“</code> <code>condition</code> turi pateikti visuose autorizavimo kontekstuose, kai <code>identityProvider</code> naudojamas kaip tapatybės teikimo įrankis, sąrašą. Jei <code>condition</code> neįmanoma konvertuoti į tapatybių sąrašą, parodoma klaida, pvz., jei priimdamas sprendimą <code>condition</code> atsižvelgia į kitus atributus, o ne vartotojų arba grupių tapatybės.<br />    Atkreipkite dėmesį, kad tapatybių sąraše tapatybės rodomos taip pat, kaip ir <code>condition</code> netaikant joms jokio normalizavimo (pvz., grupės išplėtimo).<br />



## Category
Accessing data
