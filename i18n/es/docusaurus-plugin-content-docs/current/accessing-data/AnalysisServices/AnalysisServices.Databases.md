---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Devuelve las bases de datos de Analysis Services de un host concreto.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devuelve las bases de datos de una instancia de Analysis Services, <code>server</code>. Se puede proporcionar un parámetro de registro opcional, <code>options</code>, para especificar propiedades adicionales. El registro puede contener los campos siguientes:    <ul><li><code>TypedMeasureColumns</code> : Un valor l&#243;gico que indica si los tipos especificados del modelo tabular o multidimensional se usar&#225;n para los tipos de columnas de medidas agregadas. Cuando se establece en false, el tipo &quot;number&quot; se usar&#225; para todas las columnas de medidas. El valor predeterminado para esta opci&#243;n es false.</li><li><code>Culture</code> : Un nombre de referencia cultural que especifica la referencia cultural de los datos. Este se corresponde con la propiedad de cadena de conexi&#243;n &quot;Locale Identifier&quot;.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado depende del controlador.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>SubQueries</code> : N&#250;mero (0, 1 o 2) que establece el valor de la propiedad &quot;SubQueries&quot; en la cadena de conexi&#243;n. Controla el comportamiento de los miembros calculados en subselecciones o subcubos, y el valor predeterminado es 2.</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
