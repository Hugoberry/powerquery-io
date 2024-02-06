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

Devolve uma tabela que contém uma linha para cada item de Lista encontrado na lista do SharePoint especificada, <code>url</code>. Cada linha contém as propriedades da Lista. <code>options</code> poderá ser especificado para controlar as seguintes opções:    <ul><li><code>ApiVersion</code> : Um n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot; que especifica a vers&#227;o da API do SharePoint a utilizar para este site. Quando n&#227;o &#233; especificado, &#233; utilizada a vers&#227;o 14 da API. Quando o texto Auto &#233; especificado, a vers&#227;o do servidor ser&#225; detetada automaticamente, se poss&#237;vel, caso contr&#225;rio, a vers&#227;o assume o valor predefinido, ou seja, 14. Os sites SharePoint que n&#227;o estejam em ingl&#234;s requerem, pelo menos, a vers&#227;o 15.</li><li><code>Implementation</code> : Opcional. Especifica a vers&#227;o do conector do SharePoint a utilizar. Os valores aceites s&#227;o &quot;2.0&quot; ou nulo. Se o valor for &quot;2.0&quot;, &#233; utilizada a implementa&#231;&#227;o 2.0 do conector do SharePoint. Se o valor for nulo, &#233; utilizada a implementa&#231;&#227;o original do conector do SharePoint.</li><li><code>ViewMode</code> : Opcional. Esta op&#231;&#227;o s&#243; &#233; v&#225;lida para a implementa&#231;&#227;o 2.0. Os valores aceites s&#227;o &quot;Todos&quot; e &quot;Predefini&#231;&#227;o&quot;. Se n&#227;o for especificado nenhum valor, o valor &#233; definido como &quot;Todos&quot;. Quando &quot;Todos&quot; &#233; especificado, a vista incluir&#225; todas as colunas criadas pelo utilizador e definidas pelo sistema. Quando &quot;Predefini&#231;&#227;o&quot; &#233; especificado, a vista corresponder&#225; ao que o utilizador v&#234; ao consultar a lista online em qualquer vista definida pelo utilizador como Predefini&#231;&#227;o nas respetivas defini&#231;&#245;es. Se o utilizador editar a vista predefinida para adicionar ou remover colunas criadas pelo utilizador ou definidas pelo sistema ou ao criar uma nova vista e defini-la como predefini&#231;&#227;o, estas altera&#231;&#245;es ser&#227;o propagadas atrav&#233;s do conector.</li><li><code>DisableAppendNoteColumns</code> : Impede o conector de utilizar um ponto final separado para colunas de notas.</li></ul>    



## Category
Accessing data
