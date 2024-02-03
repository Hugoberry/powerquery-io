---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Retorna els grups d&#39;informes a l&#39;Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Retorna una taula de paquets multidimensionals de l'Adobe Analytics. Es pot especificar un paràmetre de registre opcional (<code>options</code>) per controlar les opcions següents:    <ul><li><code>HierarchicalNavigation</code> : Disjunci&#243; l&#242;gica (&quot;true&quot; o &quot;false&quot;) que estableix si cal visualitzar les taules agrupades pel nom d&#39;esquema. El valor per defecte &#233;s &quot;false&quot;.</li><li><code>MaxRetryCount</code> : Nombre de reintents que es faran durant el sondeig per obtenir els resultats de la consulta. El valor per defecte &#233;s de 120.</li><li><code>RetryInterval</code> : Durada del per&#237;ode entre cada reintent. El valor per defecte &#233;s d&#39;1 segon.</li><li><code>Implementation</code> : Especifiqueu la versi&#243; de l&#39;API de l&#39;Adobe Analytics. Els valors v&#224;lids s&#243;n: &quot;2.0&quot;. Per defecte s&#39;utilitza la versi&#243; de l&#39;API 1.4.</li></ul>    



## Category
Accessing data
