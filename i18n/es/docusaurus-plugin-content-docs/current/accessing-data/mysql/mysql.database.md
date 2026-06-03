---
title: MySQL.Database
---

# MySQL.Database


Devuelve una tabla de tablas, vistas y funciones escalares almacenadas SQL disponibles en una base de datos MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas, vistas y funciones escalares almacenadas de SQL disponibles en una base de datos MySQL en el servidor `server` en la instancia de base de datos denominada `database`. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional (`options`) para controlar las opciones siguientes:

-   `Encoding` : Valor TextEncoding que especifica el juego de caracteres usado para codificar todas las consultas enviadas al servidor (el valor predeterminado es "null").
-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.
-   `Query` : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolverá el primero.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `TreatTinyAsBoolean` : Un valor lógico (True o False) que determina si forzar columnas tinyint en el servidor como valores lógicos. El valor predeterminado es True.
-   `OldGuids` : Un valor lógico (True o False) que establece si las columnas char(36) (si su valor es False) o las columnas binary(16) (si su valor es True) se tratarán como GUID. El valor predeterminado es False.
-   `ReturnSingleDatabase` : Un valor lógico (True o False) que determina si devolver todas las tablas de todas las bases de datos (si el valor es False) o si devolver las tablas y las vistas de la base de datos especificada (si el valor es True). El valor predeterminado es False.
-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\] o \[Query = "select ..."\], por ejemplo.



## Category
Accessing data
