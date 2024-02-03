---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Retorna uma tabela com o conteúdo de um site do SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela contendo uma linha para cada pasta e documento encontrado no site especificado do SharePoint, <code>url</code>. Cada linha contém as propriedades da pasta ou do arquivo e um link para o respectivo conteúdo. O <code>options</code> pode ser especificado para controlar as seguintes opções:    <ul><li><code>ApiVersion</code> : Um n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot;, que especifica a vers&#227;o da API do SharePoint a ser usada para este site. Quando n&#227;o houver especifica&#231;&#227;o, a vers&#227;o 14 da API ser&#225; usada. Quando Auto for especificado, a vers&#227;o do servidor ser&#225; automaticamente descoberta, se poss&#237;vel. Caso contr&#225;rio, a vers&#227;o 14 ser&#225; usada por padr&#227;o. Sites do SharePoint em idiomas diferentes do ingl&#234;s exigem pelo menos a vers&#227;o 15.</li></ul>    



## Category
Accessing data
