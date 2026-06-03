---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Devuelve una lista de identidades que la condición aceptará.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Mediante el elemento `identityProvider` especificado, convierte `condition` en una lista de identidades para las cuales `condition` devolvería un valor `true` en todos los contextos de autorización con `identityProvider` como proveedor de identidades. Si no es posible convertir `condition` en una lista de identidades, por ejemplo, si `condition` consulta atributos que no sean relativos a identidades de usuarios o grupos para tomar una decisión, se genera un error.

Tenga en cuenta que la lista de identidades representa las identidades tal como aparecen en `condition`, es decir, sobre ellas no se ejecuta ninguna operación de normalización, como sería el caso de una expansión de grupos.



## Category
Accessing data
