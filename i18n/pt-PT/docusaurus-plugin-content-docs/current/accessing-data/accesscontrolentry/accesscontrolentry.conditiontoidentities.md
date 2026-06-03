---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Devolve uma lista de identidades que a condição vai aceitar.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Utilizar a `identityProvider` especificada converte a `condition` na lista de identidades para a qual `condition` deveria devolver `verdadeira` em todos os contextos de autorização com `identityProvider` como o fornecedor de identidade. É gerado um erro se não for possível converter `condition` numa lista de identidades, por exemplo, se `condition` consulta atributos diferentes de identidades de utilizador ou de grupo para tomar uma decisão.

Tenha em atenção que a lista de identidades representa as identidades conforme aparecem em `condition` e a normalização (tal como a expansão do grupo) não é executada nas mesmas.



## Category
Accessing data
