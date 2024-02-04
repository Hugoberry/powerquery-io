---
title: AzureStorage.Tables
---

# AzureStorage.Tables


## Description

Devolve uma tabela de navegação que contém as tabelas encontradas na conta especificada a partir de um cofre de armazenamento do Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Details

Devolve uma tabela de navegação que contém uma linha para cada tabela que se encontra no URL da conta, <code>account</code>, a partir de um cofre de armazenamento do Azure. Cada linha contém uma ligação para a tabela do Azure. Pode fornecer um parâmetro de registo opcional, <code>options</code>, para especificar propriedades adicionais. O registo pode conter os seguintes campos:    <ul><li><code>Timeout</code> : Uma dura&#231;&#227;o que controla o tempo que se deve aguardar antes de abandonar o pedido ao servidor. O valor predefinido &#233; espec&#237;fico da origem.</li></ul>



## Category
Accessing data
