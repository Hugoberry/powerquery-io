---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


## Description

Devolve uma lista de identidades que a condição vai aceitar.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Details

Utilizar a <code>identityProvider</code> especificada converte a <code>condition</code> na lista de identidades para a qual <code>condition</code> deveria devolver <code>verdadeira</code> em todos os contextos de autorização com <code>identityProvider</code> como o fornecedor de identidade. É gerado um erro se não for possível converter <code>condition</code> numa lista de identidades, por exemplo, se <code>condition</code> consulta atributos diferentes de identidades de utilizador ou de grupo para tomar uma decisão. <br />    Tenha em atenção que a lista de identidades representa as identidades conforme aparecem em <code>condition</code> e a normalização (tal como a expansão do grupo) não é executada nas mesmas.<br />



## Category
Accessing data
