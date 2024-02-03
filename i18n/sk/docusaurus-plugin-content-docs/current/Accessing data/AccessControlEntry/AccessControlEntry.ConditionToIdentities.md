---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Vráti zoznam identít, ktoré bude podmienka prijímať.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Pomocou zadaného <code>identityProvider</code> konvertuje <code>condition</code> na zoznam identít, pre ktoré by <code>condition</code> vrátilo hodnotu <code>true</code> vo všetkých kontextoch autorizácie s poskytovateľom identity <code>identityProvider</code>. Ak <code>condition</code> nie je možné konvertovať na zoznam identít, vyvolá sa chyba – napríklad ak sa <code>condition</code> pri rozhodovaní obráti na iné atribúty než na identity používateľa alebo skupiny.<br />    Upozorňujeme, že tento zoznam identít predstavuje identity tak, ako ich zobrazuje <code>condition</code>, a to bez vykonania normalizácie (ako napríklad rozšírenie skupiny).<br />



## Category
Accessing data
