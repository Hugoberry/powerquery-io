---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Retorna una llista d&#39;identitats que la condició acceptarà.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Mitjançant l'element <code>identityProvider</code> especificat, converteix <code>condition</code> en una llista d'identitats per a les quals <code>condition</code> retornaria un valor <code>true</code> en tots els contextos d'autorització amb <code>identityProvider</code> com a proveïdor d'identitats. Si no és possible convertir <code>condition</code> en una llista d'identitats, per exemple, si <code>condition</code> consulta atributs que no siguin relatius a identitats d'usuaris o grups per prendre una decisió, es genera un error.<br />    Tingueu en compte que la llista d'identitats representa les identitats tal com apareixen a <code>condition</code>, és a dir, sobre elles no s'executa cap operació de normalització, com seria el cas d'una expansió de grups.<br />



## Category
Accessing data
