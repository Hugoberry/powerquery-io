---
title: Salesforce.Data
---

# Salesforce.Data


Devolve os objetos da conta do Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Devolve os objetos na conta do Salesforce fornecidos nas credenciais. A conta será ligada através do ambiente fornecido <code>loginUrl</code>. Se não for fornecido nenhum ambiente, a conta será ligada à produção (https://login.salesforce.com). Pode ser fornecido um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; false).</li><li><code>ApiVersion</code> : A vers&#227;o da API do SalesForce a utilizar para esta consulta. Quando n&#227;o &#233; especificada, &#233; utilizada a vers&#227;o 29.0 da API.</li><li><code>Timeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar o pedido ao servidor. O valor predefinido &#233; espec&#237;fico da origem.</li></ul>    



## Category
Accessing data
