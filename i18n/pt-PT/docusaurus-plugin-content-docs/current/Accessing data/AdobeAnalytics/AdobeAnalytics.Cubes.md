---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Devolve os conjuntos de relatório no Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Devolve uma tabela de pacotes multidimensionais da base de dados do Adobe Analytics. É possível especificar um parâmetro de registo opcional, <code>options</code>, para controlar as seguintes opções:    <ul><li><code>HierarchicalNavigation</code> : Uma l&#243;gica (true/false) que define se s&#227;o visualizadas as tabelas agrupadas pelos respetivos nomes de esquema (a predefini&#231;&#227;o &#233; falso).</li><li><code>MaxRetryCount</code> : O n&#250;mero de tentativas a realizar numa consulta pelo resultado da consulta. O valor predefinido &#233; 120.</li><li><code>RetryInterval</code> : A dura&#231;&#227;o de tempo entre tentativas de repeti&#231;&#227;o. O valor predefinido &#233; 1 segundo.</li><li><code>Implementation</code> : Especifica a vers&#227;o da API do Adobe Analytics. Os valores v&#225;lidos s&#227;o: &quot;2.0&quot;. A predefini&#231;&#227;o utiliza a vers&#227;o 1.4 da API</li></ul>    



## Category
Accessing data
