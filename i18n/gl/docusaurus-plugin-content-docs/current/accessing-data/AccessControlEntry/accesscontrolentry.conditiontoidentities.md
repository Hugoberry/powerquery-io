---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Devolve unha lista de identidades que aceptará a condición.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Co elemento `identityProvider` especificado, convértese `condition` na lista de identidades para a que `condition` devolvería `true` en todos os contextos de autorización con `identityProvider` como fornecedor de identidades. Prodúcese un erro se non se pode converter `condition` nunha lista de identidades; por exemplo, se `condition` consulta atributos distintos ás identidades do usuario ou grupo para tomar unha decisión.

Teña en conta que a lista de identidades representa as identidades tal e como aparecen en `condition` e non se lles realiza ningún proceso de normalización (como a expansión do grupo).



## Category
Accessing data
