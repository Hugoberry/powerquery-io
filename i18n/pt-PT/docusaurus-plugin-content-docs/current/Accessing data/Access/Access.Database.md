---
title: Access.Database
---

# Access.Database


## Description

Devolve uma representação estrutural de uma base de dados do Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Devolve uma representação estrutural de uma base de dados do Access, <code>database</code>. Pode ser especificado um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se s&#227;o geradas as propriedades de navega&#231;&#227;o nos valores devolvidos (a predefini&#231;&#227;o &#233; false).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o que &#233; utilizada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li></ul>    O parâmetro de registo é especificado como [option1 = value1, option2 = value2...], por exemplo.



## Category
Accessing data
