---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Devolve unha lista de identidades que aceptará a condición.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Co elemento <code>identityProvider</code> especificado, convértese <code>condition</code> na lista de identidades para a que <code>condition</code> devolvería <code>true</code> en todos os contextos de autorización con <code>identityProvider</code> como fornecedor de identidades. Prodúcese un erro se non se pode converter <code>condition</code> nunha lista de identidades; por exemplo, se <code>condition</code> consulta atributos distintos ás identidades do usuario ou grupo para tomar unha decisión.<br />    Teña en conta que a lista de identidades representa as identidades tal e como aparecen en <code>condition</code> e non se lles realiza ningún proceso de normalización (como a expansión do grupo).<br />



## Category
Accessing data
