---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Retorna os conjuntos de relatórios ao Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Retorna uma tabela de pacotes multidimensionais do Adobe Analytics. Um parâmetro de registro opcional, <code>options</code>, pode ser especificado para controlar as opções a seguir:    <ul><li><code>HierarchicalNavigation</code> : Um l&#243;gica (true/false) que define se as tabelas agrupadas por seus nomes de esquema ser&#227;o exibidas (o padr&#227;o &#233; false).</li><li><code>MaxRetryCount</code> : O n&#250;mero de tentativas a serem executadas ao sondar o resultado da consulta. O valor padr&#227;o &#233; 120.</li><li><code>RetryInterval</code> : A dura&#231;&#227;o do tempo entre as tentativas de nova tentativa. O valor padr&#227;o &#233; 1 segundo.</li><li><code>Implementation</code> : Especifica a vers&#227;o da API do Adobe Analytics. Os valores v&#225;lidos s&#227;o: &quot;2.0&quot;. O padr&#227;o usa a vers&#227;o 1.4 da API.</li></ul>    



## Category
Accessing data
