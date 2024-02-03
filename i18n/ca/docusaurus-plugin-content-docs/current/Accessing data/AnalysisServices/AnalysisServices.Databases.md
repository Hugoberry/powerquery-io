---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Torna les bases de dades dels serveis d&#39;anàlisi en un host concret.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Retorna les bases de dades d'una instància de l'Analysis Services, <code>server</code>. Es pot proporcionar un paràmetre de registre opcional, <code>options</code>, per especificar propietats addicionals. El registre pot contenir els camps següents:    <ul><li><code>TypedMeasureColumns</code> : Valor l&#242;gic que indica si els tipus especificats en el model multidimensional o tabular s&#39;utilitzaran per als tipus de les columnes de mesura afegides. Si s&#39;estableix com a &quot;false&quot;, el tipus &quot;number&quot; s&#39;utilitzar&#224; per a totes les columnes de mesura. El valor per defecte d&#39;aquesta opci&#243; &#233;s &quot;false&quot;.</li><li><code>Culture</code> : Nom de cultura que n&#39;especifica la de les dades. Correspon a la propietat de cadena de connexi&#243; &quot;Locale Identifier&quot;.</li><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte dep&#232;n del controlador.</li><li><code>ConnectionTimeout</code> : Duraci&#243; que controla el temps que cal esperar abans de cancel&#183;lar un intent per establir una connexi&#243; amb el servidor. El valor per defecte dep&#232;n del controlador.</li><li><code>SubQueries</code> : N&#250;mero (0, 1 o 2) que defineix el valor de la propietat &quot;SubQueries&quot; a la cadena de connexi&#243;. Controla el comportament dels membres calculats en subseleccions o subcubs (el valor per defecte &#233;s 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
