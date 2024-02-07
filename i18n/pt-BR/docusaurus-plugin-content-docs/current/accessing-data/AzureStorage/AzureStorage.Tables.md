---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Retorna uma tabela navegacional com as tabelas encontradas na conta especificada de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de navegação contendo uma linha para cada tabela encontrada na URL da conta, <code>account</code>, de um cofre de armazenamento do Azure. Cada linha contém um link para a tabela do Azure. Um parâmetro de registro opcional, <code>options</code>, pode ser fornecido para especificar mais propriedades. O registro pode conter os seguintes campos:    <ul><li><code>Timeout</code> : Uma dura&#231;&#227;o que controla o tempo de espera at&#233; que a solicita&#231;&#227;o para o servidor seja abandonada. O valor padr&#227;o &#233; espec&#237;fico da origem.</li></ul>



## Category
Accessing data
