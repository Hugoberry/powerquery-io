---
title: Sybase.Database
---

# Sybase.Database


Devuelve una tabla de tablas y vistas de SQL disponibles en una base de datos Sybase.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas y vistas SQL disponibles en una base de datos Sybase en el servidor `server` de la instancia de base de datos denominada `database`. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional (`options`) para controlar las opciones siguientes:

-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.
-   `Query` : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolverá el primero.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\] o \[Query = "select ..."\], por ejemplo.



## Category
Accessing data
