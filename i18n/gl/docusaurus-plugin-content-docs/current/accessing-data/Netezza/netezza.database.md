---
title: Netezza.Database
---

# Netezza.Database


Importa datos dunha base de datos de IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de funcións almacenadas, visualizacións e táboas de Netezza da base de datos do servidor de Netezza `database` no servidor `server`. Opcionalmente, pode especificarse o porto co servidor, separado por dous puntos. Tamén se pode especificar outro parámetro de rexistro opcional, `options`, para controlar as seguintes opcións:

-   `CreateNavigationProperties`: unha lóxica (true/false) que establece se se xeran propiedades de navegación nos valores devoltos (o valor predefinido é true)
-   `HierarchicalNavigation`: unha lóxica (true/false) que establece se se mostran as táboas agrupadas polos seus nomes de esquema (o valor predefinido é false)
-   `ConnectionTimeout`: unha duración que controla durante canto tempo se agarda ata que se abandona o intento de conectarse ao servidor. O valor predefinido depende do controlador.
-   `CommandTimeout`: unha duración que controla durante canto tempo se permite executar a consulta do lado do servidor antes de cancelarse. O valor predefinido depende do controlador.
-   `NormalizeDatabaseName`: unha lóxica (true/false) que establece se se organiza o nome da base de datos en maiúsculas ou se se interpreta literalmente (o valor predefinido é true).

O parámetro do rexistro especifícase como \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Enumera as táboas nun proxecto de IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



