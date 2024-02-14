---
title: SharePoint.Contents
---

# SharePoint.Contents


Devolve uma tabela com conteúdos de um site SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada pasta e documento encontrados no site SharePoint especificado, <code>url</code>. Cada linha contém as propriedades da pasta ou ficheiro e uma ligação para o conteúdo correspondente. <code>options</code> poderá ser especificado para controlar as seguintes opções:    <ul><li><code>ApiVersion</code> : Um n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot; que especifica a vers&#227;o da API do SharePoint a utilizar para este site. Quando n&#227;o &#233; especificado, &#233; utilizada a vers&#227;o 14 da API. Quando o texto Auto &#233; especificado, a vers&#227;o do servidor ser&#225; detetada automaticamente, se poss&#237;vel, caso contr&#225;rio, a vers&#227;o assume o valor predefinido, ou seja, 14. Os sites SharePoint que n&#227;o estejam em ingl&#234;s requerem, pelo menos, a vers&#227;o 15.</li></ul>    



## Category
Accessing data
