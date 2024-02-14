---
title: Access.Database
---

# Access.Database


Retorna uma representação estrutural de um banco de dados do Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Retorna uma representação estrutural de um banco de dados do Access, <code>database</code>. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as seguintes opções:    <ul><li><code>CreateNavigationProperties</code> : Uma l&#243;gica (true/false) que define se as propriedades de navega&#231;&#227;o nos valores retornados ser&#227;o geradas (o padr&#227;o &#233; false).</li><li><code>NavigationPropertyNameGenerator</code> : Uma fun&#231;&#227;o usada para a cria&#231;&#227;o de nomes de propriedades de navega&#231;&#227;o.</li></ul>    O parâmetro do registro é especificado como [option1 = value1, option2 = value2...], por exemplo.



## Category
Accessing data
