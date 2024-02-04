---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Devolve os relatórios da conta do Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Devolve os objetos na conta do Salesforce fornecidos nas credenciais. A conta será ligada através do ambiente fornecido <code>loginUrl</code>. Se não for fornecido nenhum ambiente, a conta será ligada à produção (https://login.salesforce.com). Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>ApiVersion</code> : A vers&#227;o da API do SalesForce a utilizar para esta consulta. Quando n&#227;o &#233; especificada, &#233; utilizada a vers&#227;o 29.0 da API.</li><li><code>Timeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar o pedido ao servidor. O valor predefinido &#233; espec&#237;fico da origem.</li></ul>    



## Category
Accessing data
