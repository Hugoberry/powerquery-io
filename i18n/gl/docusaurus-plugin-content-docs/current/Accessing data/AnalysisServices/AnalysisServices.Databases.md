---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Devolve as bases de datos de Analysis Services nun computador servidor particular.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Devolve bases de datos nunha instancia de Analysis Services, <code>server</code>. Pode fornecerse un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. O rexistro pode conter os seguintes campos:    <ul><li><code>TypedMeasureColumns</code> : Un valor l&#243;xico que indica se os tipos especificados no modelo tabular ou multidimensional se usar&#225;n para os tipos das columnas de medida engadidas. Cando se establece en false, o tipo &quot;number&quot; usarase para todas as columnas de medida. O valor predefinido para esta opci&#243;n &#233; false.</li><li><code>Culture</code> : Un nome de referencia cultural que especifica a referencia cultural dos datos. Este corresp&#243;ndese coa propiedade de cadea de conexi&#243;n &quot;Locale Identifier&quot;.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido depende do controlador.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>SubQueries</code> : Un n&#250;mero (0, 1 ou 2) que establece o valor da propiedade &quot;SubQueries&quot; na cadea de conexi&#243;n. Isto controla o comportamento de membros calculados en subselecci&#243;ns ou subcubos. (O valor predefinido &#233; 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
