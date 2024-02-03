---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Vraća listu identiteta koju će uslov prihvatiti.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Pomoću navedenog <code>identityProvider</code>, konvertuje <code>condition</code> u listu identiteta za koje bi <code>condition</code> vratio <code>tačno</code> u svim kontekstima autorizacije uz <code>identityProvider</code> kao dobavljač identiteta. Prikazuje se greška ako nije moguće konvertovati <code>condition</code> u listu identiteta, na primer ako <code>condition</code> prilikom donošenja odluke konsultuje atribute koji nisu identiteti korisnika ili grupa.<br />    Imajte na umu da su identiteti na listi identiteta predstavljeni onako kako se pojavljuju u <code>condition</code> i da se na njima ne izvršava normalizacija (kao što je proširenje grupe).<br />



## Category
Accessing data
