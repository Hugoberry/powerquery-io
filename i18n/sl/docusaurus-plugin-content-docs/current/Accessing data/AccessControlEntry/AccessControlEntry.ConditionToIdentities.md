---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Vrne seznam identitet, ki jih bo sprejel pogoj.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Z uporabo navedene lastnosti <code>identityProvider</code> pretvori <code>condition</code> v seznam identitet, za katero bil <code>condition</code> vrnil <code>true</code> v vseh kontekstih odobritve, kjer je <code>identityProvider</code> ponudnik identitete. Prikaže se sporočilo o napaki, če <code>condition</code> ni mogoče pretvoriti v seznam identitet (če na primer <code>condition</code> za sprejem odločitve uporabi atribute, ki niso identitete uporabnikov ali skupin).<br />    Upoštevajte, da seznam identitet predstavlja identitete, kot so prikazane v <code>condition</code>, za njih pa ni izvedena nobena normalizacija (kot je razširitev skupine).<br />



## Category
Accessing data
