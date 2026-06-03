---
title: Sql.Databases
---

# Sql.Databases


Devuelve una tabla de bases de datos de SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de bases de datos en el servidor SQL Server especificado, `server`. Se puede especificar un parámetro de registro opcional (`options`) para controlar las opciones siguientes:

-   `CreateNavigationProperties` : Un valor lógico (True o False) que establece si se deben generar propiedades de navegación en los valores devueltos (el valor predeterminado es True).
-   `NavigationPropertyNameGenerator` : Una función que se usa para crear nombres para las propiedades de navegación.
-   `MaxDegreeOfParallelism` : Un número que establece el valor de la cláusula de consulta "maxdop" de la consulta SQL generada.
-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.
-   `ConnectionTimeout` : Duración que controla cuánto tiempo de espera es necesario antes de abandonar un intento de establecer una conexión con el servidor. El valor predeterminado depende del controlador.
-   `HierarchicalNavigation` : Un valor lógico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).
-   `MultiSubnetFailover` : Valor lógico (True o False) que define el valor de la propiedad "MultiSubnetFailover" en la cadena de conexión (el valor predeterminado es False).
-   `UnsafeTypeConversions` : Operador lógico ("true" o "false") que, si es "true", intenta plegar las conversiones de tipos que pueden generar un error y provocar errores en toda la consulta. No se recomienda para uso general.
-   `ContextInfo` : Valor binario que se usa para establecer CONTEXT\_INFO antes de ejecutar cada comando.
-   `OmitSRID` : Operador lógico ("true" o "false") que, si es "true", omite el SRID cuando se produce texto conocido a partir de tipos de geometría y geográficos.
-   `EnableCrossDatabaseFolding` : Valor lógico (VERDADERO/FALSO) que, si es VERDADERO, permitirá plegar consultas a bases de datos en el mismo servidor. El valor predeterminado es FALSO.

El parámetro de registro se especifica como \[option1 = value1, option2 = value2...\], por ejemplo.  
  
No admite la configuración de una consulta SQL para que se ejecute en el servidor. `Sql.Database` debe usarse en su lugar para ejecutar una consulta SQL.



## Category
Accessing data
