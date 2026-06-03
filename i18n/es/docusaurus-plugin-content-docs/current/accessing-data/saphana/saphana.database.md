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

Devuelve una tabla de paquetes multidimensionales de la base de datos SAP HANA `server`. Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `Query` : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolverá el primero.
-   `Distribution` : SapHanaDistribution que establece el valor de la propiedad "Distribución" en la cadena de conexión. El enrutamiento de instrucciones es el método para evaluar el nodo de servidor correcto de un sistema distribuido antes de la ejecución de instrucciones. SapHanaDistribution.All es el valor predeterminado.
-   `Implementation` : Especifica la implementación del conector SAP HANA que se va a usar.
-   `EnableColumnBinding` : Enlaza variables a las columnas de un conjunto de resultados de SAP HANA al capturar datos. Puede mejorar potencialmente el rendimiento a costa de un uso de memoria ligeramente mayor. El valor predeterminado es falso.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado es de 15 segundos.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.



## Category
Accessing data
