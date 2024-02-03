---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Retorna uma tabela com o conteúdo de uma Lista do SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Retorna uma tabela contendo uma linha para cada item de Lista encontrado na lista especificada do SharePoint, <code>url</code>. Cada linha contém as propriedades da Lista. O <code>options</code> pode ser especificado para controlar as seguintes opções:    <ul><li><code>ApiVersion</code> : Um n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot;, que especifica a vers&#227;o da API do SharePoint a ser usada para este site. Quando n&#227;o houver especifica&#231;&#227;o, a vers&#227;o 14 da API ser&#225; usada. Quando Auto for especificado, a vers&#227;o do servidor ser&#225; automaticamente descoberta, se poss&#237;vel. Caso contr&#225;rio, a vers&#227;o 14 ser&#225; usada por padr&#227;o. Sites do SharePoint em idiomas diferentes do ingl&#234;s exigem pelo menos a vers&#227;o 15.</li><li><code>Implementation</code> : Opcional. Especifica qual vers&#227;o do conector do SharePoint usar. Os valores aceitos s&#227;o &quot;2.0&quot; ou nulos. Se o valor for &quot;2.0&quot;, a implementa&#231;&#227;o 2.0 do conector do SharePoint ser&#225; usada. Se o valor for nulo, a implementa&#231;&#227;o original do conector do SharePoint ser&#225; usada.</li><li><code>ViewMode</code> : Opcional. Esta op&#231;&#227;o &#233; v&#225;lida apenas para implementa&#231;&#227;o 2.0. Os valores aceitos s&#227;o &quot;todos&quot; e &quot;padr&#227;o&quot;. Se nenhum valor for especificado, o valor ser&#225; definido como &quot;tudo&quot;. Quando o &quot;All&quot; &#233; especificado, a visualiza&#231;&#227;o inclui todas as colunas criadas e definidas pelo sistema. Quando o &quot;padr&#227;o&quot; &#233; especificado, a visualiza&#231;&#227;o corresponde ao que o usu&#225;rio v&#234; ao analisar a lista online em qualquer visualiza&#231;&#227;o que o usu&#225;rio definir como padr&#227;o em suas configura&#231;&#245;es. Se o usu&#225;rio editar sua visualiza&#231;&#227;o padr&#227;o para adicionar ou remover colunas criadas pelo usu&#225;rio ou definidas pelo sistema ou criando uma nova visualiza&#231;&#227;o e configurando-a como padr&#227;o, essas altera&#231;&#245;es se propagam atrav&#233;s do conector.</li><li><code>DisableAppendNoteColumns</code> : Impede que o conector use um ponto final separado para colunas de notas.</li></ul>    



## Category
Accessing data
