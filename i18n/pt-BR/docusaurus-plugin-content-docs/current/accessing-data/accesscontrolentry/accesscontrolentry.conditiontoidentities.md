---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Retorna uma lista de identidades que a condição aceitará.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Usando o `identityProvider` especificado, converte o `condition` na lista de identidades para a qual o `condition` retornaria `true` em todos os contextos de autorização com o `identityProvider` como o provedor de identidade. Um erro será gerado se não for possível converter o `condition` em uma lista de identidades, por exemplo, se o `condition` consultar os atributos diferentes das identidades de usuário ou grupo para tomar decisões.

Observe que a lista de identidades representa as identidades conforme elas aparecem no `condition`, e nenhuma normalização (por exemplo, expansão de grupo) é executada nelas.



## Category
Accessing data
