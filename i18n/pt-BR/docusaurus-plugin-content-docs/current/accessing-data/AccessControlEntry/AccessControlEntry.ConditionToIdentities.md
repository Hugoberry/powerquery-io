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

Usando o <code>identityProvider</code> especificado, converte o <code>condition</code> na lista de identidades para a qual o <code>condition</code> retornaria <code>true</code> em todos os contextos de autorização com o <code>identityProvider</code> como o provedor de identidade. Um erro será gerado se não for possível converter o <code>condition</code> em uma lista de identidades, por exemplo, se o <code>condition</code> consultar os atributos diferentes das identidades de usuário ou grupo para tomar decisões.<br />    Observe que a lista de identidades representa as identidades conforme elas aparecem no <code>condition</code>, e nenhuma normalização (por exemplo, expansão de grupo) é executada nelas.<br />



## Category
Accessing data
