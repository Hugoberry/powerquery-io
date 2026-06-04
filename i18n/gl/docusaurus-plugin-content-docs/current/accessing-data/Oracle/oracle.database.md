---
title: Oracle.Database
---

# Oracle.Database


Devolve unha táboa de táboas e vistas SQL dunha base de datos Oracle Database.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas e vistas SQL da base de datos Oracle no servidor `server` . O porto pódese especificar opcionalmente co servidor, separado por dous puntos. Pódese especificar un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.
-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\] ou \[Consulta = "seleccionar ..."\], por exemplo.



## Category
Accessing data
