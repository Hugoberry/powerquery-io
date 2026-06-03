---
title: DB2.Database
---

# DB2.Database


Devuelve una tabla de tablas y vistas de SQL disponibles en una base de datos Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas y vistas SQL disponibles en una base de datos Db2 en el servidor `server` de la instancia de base de datos denominada `database`. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional (`options`) para controlar las opciones siguientes:

-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.
-   `Query` : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolverá el primero.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).
-   `Implementation` : Especifica la implementación interna del proveedor de base de datos que se debe usar. Los valores válidos son: "IBM" y "Microsoft".
-   `BinaryCodePage` : Número del CCSID (Identificador codificado del juego de caracteres) para descodificar datos binarios Db2 FOR BIT en cadenas de caracteres. Se aplica a Implementation = "Microsoft". Establézcalo en 0 para deshabilitar la conversión (valor predeterminado). Establézcalo en 1 para realizar la conversión según la codificación de la base de datos. Establezca otro número de CCSID para realizar la conversión de acuerdo con la codificación de la aplicación.
-   `PackageCollection` : Especifica un valor de cadena para la colección de paquetes (el valor predeterminado es " NULLID") para habilitar el uso de los paquetes compartidos necesarios para procesar instrucciones SQL. Se aplica a Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Especifica si la conexión se realiza a través de una puerta de enlace de DB2 Connect. Se aplica a la implementación = "Microsoft".

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\] o \[Query = "select ..."\], por ejemplo.



## Category
Accessing data
