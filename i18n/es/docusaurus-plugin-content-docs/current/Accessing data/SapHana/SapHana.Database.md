---
title: SapHana.Database
---

# SapHana.Database


Muestra los paquetes de una base de datos SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de paquetes multidimensionales de la base de datos SAP HANA <code>server</code>. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las siguientes opciones:    <ul><li><code>Query</code> : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolver&#225; el primero.</li><li><code>Distribution</code> : SapHanaDistribution que establece el valor de la propiedad &quot;Distribuci&#243;n&quot; en la cadena de conexi&#243;n. El enrutamiento de instrucciones es el m&#233;todo para evaluar el nodo de servidor correcto de un sistema distribuido antes de la ejecuci&#243;n de instrucciones. SapHanaDistribution.All es el valor predeterminado.</li><li><code>Implementation</code> : Especifica la implementaci&#243;n del conector SAP HANA que se va a usar.</li><li><code>EnableColumnBinding</code> : Enlaza variables a las columnas de un conjunto de resultados de SAP&#160;HANA al capturar datos. Puede mejorar potencialmente el rendimiento a costa de un uso de memoria ligeramente mayor. El valor predeterminado es falso.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado es de 15&#160;segundos.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li></ul>    



## Category
Accessing data
