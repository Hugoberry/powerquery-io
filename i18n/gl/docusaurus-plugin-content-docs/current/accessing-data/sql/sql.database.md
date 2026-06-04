---
title: Sql.Database
---

# Sql.Database


Devolve unha táboa de táboas, vistas e funcións almacenadas de SQL dunha base de datos SQL Server.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de táboas SQL, vistas e funcións almacenadas da base de datos SQL Server `database` no servidor `server` . O porto pódese especificar opcionalmente co servidor, separado por dous puntos ou unha coma. Pódese especificar un parámetro de rexistro opcional, `options` , para controlar as seguintes opcións:

-   `Query` : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, só se devolverá o primeiro.
-   `CreateNavigationProperties` : Unha función lóxica (true/false) que establece se xerar propiedades de navegación nos valores devoltos (o valor predefinido é true).
-   `NavigationPropertyNameGenerator` : Unha función que se usa para crear nomes de propiedades de navegación.
-   `MaxDegreeOfParallelism` : Un número que establece o valor da cláusula de consulta "maxdop" na consulta SQL xerada.
-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.
-   `ConnectionTimeout` : Duración que controla o tempo que se debe agardar antes de abandonar un intento de conexión co servidor. O valor predefinido depende do controlador.
-   `HierarchicalNavigation` : Unha función lóxica (true/false) que establece se ver as táboas agrupadas polos nomes de esquema (o valor predefinido é false).
-   `MultiSubnetFailover` : Unha función lóxica (true/false) que establece o valor da propiedade "MultiSubnetFailover" na cadea de conexión (o valor predefinido é false).
-   `UnsafeTypeConversions` : Valor lóxico (verdadeiro/falso) que, se é verdadeiro, tenta dobrar conversións de tipo que poderían producir un erro e provocar que toda a consulta falle. Non se recomenda para uso xeral.
-   `ContextInfo` : Un valor binario que se usa para configurar CONTEXT\_INFO antes de executar cada comando.
-   `OmitSRID` : Valor lóxico (verdadeiro/falso) que, se é verdadeiro, omite o SRID ao producir Well-Known Text a partir de tipos de xeometría e xeografía.
-   `EnableCrossDatabaseFolding` : Un valor lóxico (verdadeiro/falso) que, se é verdadeiro, permite a delegación de consultas en todas as bases de datos no mesmo servidor. O valor predefinido é falso.

O parámetro de rexistro especifícase como \[opción1 = valor1, opción2 = valor2...\] ou \[Consulta = "seleccionar ..."\], por exemplo.



## Category
Accessing data
