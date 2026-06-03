---
title: SharePoint.Files
---

# SharePoint.Files


Retorna uma tabela com os documentos de um site do SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada documento encontrado no site especificado do SharePoint, `url`, e as subpastas. Cada linha contém as propriedades da pasta ou do arquivo e um link para o respectivo conteúdo. O `options` pode ser especificado para controlar as seguintes opções:

-   `ApiVersion` : Um número (14 ou 15) ou o texto "Auto", que especifica a versão da API do SharePoint a ser usada para este site. Quando não houver especificação, a versão 14 da API será usada. Quando Auto for especificado, a versão do servidor será automaticamente descoberta, se possível. Caso contrário, a versão 14 será usada por padrão. Sites do SharePoint em idiomas diferentes do inglês exigem pelo menos a versão 15.



## Category
Accessing data
