---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Returnează o listă de identități pe care le va accepta condiția.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Utilizând <code>identityProvider</code> specificat, convertește <code>condition</code> în lista de identități pentru care <code>condition</code> ar returna <code>true</code> în toate contextele de autorizare cu <code>identityProvider</code> ca furnizor de identitate. Apare o eroare dacă nu se poate converti <code>condition</code> într-o listă de identități, de exemplu, dacă <code>condition</code> consultă atribute diferite de identitățile de utilizator sau de grup pentru a lua o decizie.<br />    Rețineți că lista de identități reprezintă identitățile așa cum apar în <code>condition</code> și nicio normalizare (cum ar fi extinderea grupului) nu se efectuează asupra lor.<br />



## Category
Accessing data
