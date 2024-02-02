---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Retourne la liste des identités que la condition accepte.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

À l'aide du <code>identityProvider</code> spécifié, convertit le <code>condition</code> en liste des identités pour laquelle <code>condition</code> retourne <code>true</code> dans tous les contextes d'autorisation qui ont <code>identityProvider</code> comme fournisseur d'identité. Une erreur est générée si <code>condition</code> ne peut pas être converti en liste d'identités, par exemple, si <code>condition</code> consulte d'autres attributs que des identités d'utilisateur ou de groupe pour prendre une décision.<br />Notez que la liste d'identités représente les identités telles qu'elles apparaissent dans <code>condition</code>, sans normalisation (par exemple, une expansion de groupe).<br />



## Category
Accessing data
