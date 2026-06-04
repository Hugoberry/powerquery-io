---
title: MySQL.Database
---

# MySQL.Database


Devolve unha táboa de táboas, vistas e funcións escalares almacenadas SQL dispoñibles nunha base de datos MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas SQL, vistas e funcións escalares almacenadas dispoñibles nunha base de datos MySQL no servidor `server` na instancia da base de datos chamada `database` . O porto pódese especificar opcionalmente co servidor, separado por dous puntos. Pódese especificar un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `Encoding` : Un valor TextEncoding que especifica o conxunto de caracteres usado para codificar todas as consultas enviadas ao servidor (o valor predefinido é nulo).
-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.
-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `TreatTinyAsBoolean` : Unha función lóxica (true/false) que determina se forzar columnas tinyint no servidor como valores lóxicos. O valor predefinido é true.
-   `OldGuids` : Unha función lóxica (true/false) que establece se as columnas char(36) (se é false) ou binary(16) (se é true) se tratarán como GUID. O valor predefinido é false.
-   `ReturnSingleDatabase` : Unha función lóxica (true/false) que establece se devolver todas as táboas de todas as bases de datos (se é false) ou se devolver táboas e visualizacións da base de datos especificada (se é true). O valor predefinido é false.
-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\] ou \[Consulta = "select ..."\], por exemplo.



## Category
Accessing data
