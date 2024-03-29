---
title: Salesforce.Reports
---

# Salesforce.Reports


Retorna os relatórios da conta do Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Retorna os relatórios na conta do Salesforce fornecidos nas credenciais. A conta será conectada por meio do ambiente <code>loginUrl</code> fornecido. Se nenhum ambiente for fornecido, então a conta será conectada à produção (https://login.salesforce.com). Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar propriedades adicionais. O registro pode conter os seguintes campos:    <ul><li><code>ApiVersion</code> : A vers&#227;o da API do Salesforce a ser usada nesta consulta. Quando n&#227;o houver especifica&#231;&#227;o, a vers&#227;o 29.0 da API ser&#225; usada.</li><li><code>Timeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que a solicita&#231;&#227;o para o servidor seja abandonada. O valor padr&#227;o &#233; espec&#237;fico da origem.</li></ul>    



## Category
Accessing data
