---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Retorna una llista d'identitats que la condició acceptarà.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Mitjançant l'element `identityProvider` especificat, converteix `condition` en una llista d'identitats per a les quals `condition` retornaria un valor `true` en tots els contextos d'autorització amb `identityProvider` com a proveïdor d'identitats. Si no és possible convertir `condition` en una llista d'identitats, per exemple, si `condition` consulta atributs que no siguin relatius a identitats d'usuaris o grups per prendre una decisió, es genera un error.

Tingueu en compte que la llista d'identitats representa les identitats tal com apareixen a `condition`, és a dir, sobre elles no s'executa cap operació de normalització, com seria el cas d'una expansió de grups.



## Category
Accessing data
