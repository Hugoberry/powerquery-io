---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Devuelve los conjuntos de informes en Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de paquetes multidimensionales de Adobe Analytics. Se puede especificar un parámetro de registro opcional (<code>options</code>) para controlar las siguientes opciones:    <ul><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li><li><code>MaxRetryCount</code> : N&#250;mero de reintentos que se realizar&#225;n durante el sondeo para obtener el resultado de la consulta. El valor predeterminado es de 120.</li><li><code>RetryInterval</code> : Duraci&#243;n del per&#237;odo entre reintentos. El valor predeterminado es de 1 segundo.</li><li><code>Implementation</code> : Especifica la versi&#243;n de la API de Adobe Analytics. Los valores aceptados son: &quot;2.0&quot;. El valor predeterminado usa la versi&#243;n 1.4 de la API.</li></ul>    



## Category
Accessing data
