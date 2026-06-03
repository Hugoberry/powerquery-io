---
title: SharePoint.Tables
---

# SharePoint.Tables


Devolve uma tabela com conteúdos de uma Lista do SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve uma tabela que contém uma linha para cada item de Lista encontrado na lista do SharePoint especificada, `url`. Cada linha contém as propriedades da Lista. `options` poderá ser especificado para controlar as seguintes opções:

-   `ApiVersion` : Um número (14 ou 15) ou o texto "Auto" que especifica a versão da API do SharePoint a utilizar para este site. Quando não é especificado, é utilizada a versão 14 da API. Quando o texto Auto é especificado, a versão do servidor será detetada automaticamente, se possível, caso contrário, a versão assume o valor predefinido, ou seja, 14. Os sites SharePoint que não estejam em inglês requerem, pelo menos, a versão 15.
-   `Implementation` : Opcional. Especifica a versão do conector do SharePoint a utilizar. Os valores aceites são "2.0" ou nulo. Se o valor for "2.0", é utilizada a implementação 2.0 do conector do SharePoint. Se o valor for nulo, é utilizada a implementação original do conector do SharePoint.
-   `ViewMode` : Opcional. Esta opção só é válida para a implementação 2.0. Os valores aceites são "Todos" e "Predefinição". Se não for especificado nenhum valor, o valor é definido como "Todos". Quando "Todos" é especificado, a vista incluirá todas as colunas criadas pelo utilizador e definidas pelo sistema. Quando "Predefinição" é especificado, a vista corresponderá ao que o utilizador vê ao consultar a lista online em qualquer vista definida pelo utilizador como Predefinição nas respetivas definições. Se o utilizador editar a vista predefinida para adicionar ou remover colunas criadas pelo utilizador ou definidas pelo sistema ou ao criar uma nova vista e defini-la como predefinição, estas alterações serão propagadas através do conector.
-   `DisableAppendNoteColumns` : Impede o conector de utilizar um ponto final separado para colunas de notas.



## Category
Accessing data
