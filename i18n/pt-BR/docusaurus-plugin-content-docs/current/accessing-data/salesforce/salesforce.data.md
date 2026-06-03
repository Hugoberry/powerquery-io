---
title: Salesforce.Data
---

# Salesforce.Data


Retorna os objetos da conta do Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Retorna os objetos na conta do Salesforce fornecidos nas credenciais. A conta será conectada por meio do ambiente `loginUrl` fornecido. Se nenhum ambiente for fornecido, então a conta será conectada à produção (https://login.salesforce.com). Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:

-   `CreateNavigationProperties` : Uma lógica (true/false) que define se as propriedades de navegação nos valores retornados serão geradas (o padrão é false).
-   `ApiVersion` : A versão da API do Salesforce a ser usada nesta consulta. Quando não houver especificação, a versão 29.0 da API será usada.
-   `Timeout` : Uma duração que controla o tempo de espera até que a solicitação para o servidor seja abandonada. O valor padrão é específico da origem.



## Category
Accessing data
