---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Vráti zoznam identít, ktoré bude podmienka prijímať.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Pomocou zadaného `identityProvider` konvertuje `condition` na zoznam identít, pre ktoré by `condition` vrátilo hodnotu `true` vo všetkých kontextoch autorizácie s poskytovateľom identity `identityProvider`. Ak `condition` nie je možné konvertovať na zoznam identít, vyvolá sa chyba – napríklad ak sa `condition` pri rozhodovaní obráti na iné atribúty než na identity používateľa alebo skupiny.

Upozorňujeme, že tento zoznam identít predstavuje identity tak, ako ich zobrazuje `condition`, a to bez vykonania normalizácie (ako napríklad rozšírenie skupiny).



## Category
Accessing data
