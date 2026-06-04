---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Vraća listu identiteta koju će uslov prihvatiti.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Pomoću navedenog `identityProvider`, konvertuje `condition` u listu identiteta za koje bi `condition` vratio `tačno` u svim kontekstima autorizacije uz `identityProvider` kao dobavljač identiteta. Prikazuje se greška ako nije moguće konvertovati `condition` u listu identiteta, na primer ako `condition` prilikom donošenja odluke konsultuje atribute koji nisu identiteti korisnika ili grupa.

Imajte na umu da su identiteti na listi identiteta predstavljeni onako kako se pojavljuju u `condition` i da se na njima ne izvršava normalizacija (kao što je proširenje grupe).



## Category
Accessing data
