---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Retourne la liste des identités que la condition accepte.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

À l'aide du `identityProvider` spécifié, convertit le `condition` en liste des identités pour laquelle `condition` retourne `true` dans tous les contextes d'autorisation qui ont `identityProvider` comme fournisseur d'identité. Une erreur est générée si `condition` ne peut pas être converti en liste d'identités, par exemple, si `condition` consulte d'autres attributs que des identités d'utilisateur ou de groupe pour prendre une décision.

Notez que la liste d'identités représente les identités telles qu'elles apparaissent dans `condition`, sans normalisation (par exemple, une expansion de groupe).



## Category
Accessing data
