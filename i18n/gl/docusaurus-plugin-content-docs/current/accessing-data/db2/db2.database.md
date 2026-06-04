---
title: DB2.Database
---

# DB2.Database


Devolve unha táboa de táboas e vistas SQL dispoñibles nunha base de datos Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas e vistas SQL dispoñibles nunha base de datos Db2 no servidor `server` na instancia da base de datos chamada `database`. O porto pódese especificar opcionalmente co servidor, separado por dous puntos. Pódese especificar un parámetro de rexistro opcional, `options`, para controlar as seguintes opcións:

-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.
-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).
-   `Implementation` : Especifica a implantación do fornecedor de bases de datos interno que se vai usar. Os valores válidos son: "IBM" e "Microsoft".
-   `BinaryCodePage` : Número do CCSID (identificador codificado de conxunto de caracteres) para descodificar datos binarios de Db2 FOR BIT en cadeas de caracteres. Aplícase a Implementation = "Microsoft". Estableza 0 para desactivar a conversión (valor predefinido). Estableza 1 para converter segundo a codificación da base de datos. Estableza outro número de CCSID para converter á codificación da aplicación.
-   `PackageCollection` : Especifica un valor de cadea para a colección de paquetes (o valor predefinido é "NULLID") para permitir o uso de paquetes compartidos necesarios para procesar instrucións SQL. Aplícase a Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Especifica se a conexión se realiza a través dunha pasarela Db2 Connect. Aplícase a Implementación = "Microsoft".

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\] ou \[Consulta = "seleccionar ..."\], por exemplo.



## Category
Accessing data
