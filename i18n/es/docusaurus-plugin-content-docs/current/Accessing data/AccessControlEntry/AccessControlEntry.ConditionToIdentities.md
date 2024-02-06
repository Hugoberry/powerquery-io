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

Mediante el elemento <code>identityProvider</code> especificado, convierte <code>condition</code> en una lista de identidades para las cuales <code>condition</code> devolvería un valor <code>true</code> en todos los contextos de autorización con <code>identityProvider</code> como proveedor de identidades. Si no es posible convertir <code>condition</code> en una lista de identidades, por ejemplo, si <code>condition</code> consulta atributos que no sean relativos a identidades de usuarios o grupos para tomar una decisión, se genera un error.<br />    Tenga en cuenta que la lista de identidades representa las identidades tal como aparecen en <code>condition</code>, es decir, sobre ellas no se ejecuta ninguna operación de normalización, como sería el caso de una expansión de grupos.<br />



## Category
Accessing data
