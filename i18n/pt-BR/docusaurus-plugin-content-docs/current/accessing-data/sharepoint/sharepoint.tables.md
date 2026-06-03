---
title: SharePoint.Tables
---

# SharePoint.Tables


Retorna uma tabela com o conteúdo de uma Lista do SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna uma tabela contendo uma linha para cada item de Lista encontrado na lista especificada do SharePoint, `url`. Cada linha contém as propriedades da Lista. O `options` pode ser especificado para controlar as seguintes opções:

-   `ApiVersion` : Um número (14 ou 15) ou o texto "Auto", que especifica a versão da API do SharePoint a ser usada para este site. Quando não houver especificação, a versão 14 da API será usada. Quando Auto for especificado, a versão do servidor será automaticamente descoberta, se possível. Caso contrário, a versão 14 será usada por padrão. Sites do SharePoint em idiomas diferentes do inglês exigem pelo menos a versão 15.
-   `Implementation` : Opcional. Especifica qual versão do conector do SharePoint usar. Os valores aceitos são "2.0" ou nulos. Se o valor for "2.0", a implementação 2.0 do conector do SharePoint será usada. Se o valor for nulo, a implementação original do conector do SharePoint será usada.
-   `ViewMode` : Opcional. Esta opção é válida apenas para implementação 2.0. Os valores aceitos são "todos" e "padrão". Se nenhum valor for especificado, o valor será definido como "tudo". Quando o "All" é especificado, a visualização inclui todas as colunas criadas e definidas pelo sistema. Quando o "padrão" é especificado, a visualização corresponde ao que o usuário vê ao analisar a lista online em qualquer visualização que o usuário definir como padrão em suas configurações. Se o usuário editar sua visualização padrão para adicionar ou remover colunas criadas pelo usuário ou definidas pelo sistema ou criando uma nova visualização e configurando-a como padrão, essas alterações se propagam através do conector.
-   `DisableAppendNoteColumns` : Impede que o conector use um ponto final separado para colunas de notas.



## Category
Accessing data
