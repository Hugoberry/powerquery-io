---
title: Salesforce.Reports
---

# Salesforce.Reports


Devolve os relatórios da conta do Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Devolve os objetos na conta do Salesforce fornecidos nas credenciais. A conta será ligada através do ambiente fornecido `loginUrl`. Se não for fornecido nenhum ambiente, a conta será ligada à produção (https://login.salesforce.com). Pode ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os seguintes campos:

-   `ApiVersion` : A versão da API do SalesForce a utilizar para esta consulta. Quando não é especificada, é utilizada a versão 29.0 da API.
-   `Timeout` : Uma duração que controla o tempo que se deve aguardar antes de abandonar o pedido ao servidor. O valor predefinido é específico da origem.



## Category
Accessing data
