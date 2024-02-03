---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Devolve os conxuntos de informes en Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Devolve unha táboa de paquetes multidimensionais de Adobe Analytics. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li><li><code>MaxRetryCount</code> : N&#250;mero de tentativas que se realizar&#225;n durante a enquisa para obter o resultado da consulta. O valor predefinido &#233; 120.</li><li><code>RetryInterval</code> : Duraci&#243;n do per&#237;odo de tempo entre tentativas. O valor predefinido &#233; de 1 segundo.</li><li><code>Implementation</code> : Especifica a versi&#243;n da API de Adobe Analytics. Os valores v&#225;lidos son “2.0”. A predeterminada usa a versi&#243;n 1.4 da API.</li></ul>    



## Category
Accessing data
