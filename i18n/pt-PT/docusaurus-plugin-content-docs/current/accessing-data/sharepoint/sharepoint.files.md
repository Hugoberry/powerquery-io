---
title: SharePoint.Files
---

# SharePoint.Files


Devolve uma tabela que contém os documentos de um site SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada documento encontrado no site SharePoint especificado, `url`, e nas subpastas. Cada linha contém as propriedades da pasta ou ficheiro e uma ligação para o conteúdo correspondente. `options` poderá ser especificado para controlar as seguintes opções:

-   `ApiVersion` : Um número (14 ou 15) ou o texto "Auto" que especifica a versão da API do SharePoint a utilizar para este site. Quando não é especificado, é utilizada a versão 14 da API. Quando o texto Auto é especificado, a versão do servidor será detetada automaticamente, se possível, caso contrário, a versão assume o valor predefinido, ou seja, 14. Os sites SharePoint que não estejam em inglês requerem, pelo menos, a versão 15.



## Category
Accessing data
