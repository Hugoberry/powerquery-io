---
title: Netezza.Database
---

# Netezza.Database


## Description

Importa datos dunha base de datos de IBM Netezza.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de funcións almacenadas, visualizacións e táboas de Netezza da base de datos do servidor de Netezza <code>database</code> no servidor <code>server</code>. Opcionalmente, pode especificarse o porto co servidor, separado por dous puntos. Tamén se pode especificar outro parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:<ul>        <li><code>CreateNavigationProperties</code>: unha lóxica (true/false) que establece se se xeran propiedades de navegación nos valores devoltos (o valor predefinido é true)</li>        <li><code>HierarchicalNavigation</code>: unha lóxica (true/false) que establece se se mostran as táboas agrupadas polos seus nomes de esquema (o valor predefinido é false)</li>        <li><code>ConnectionTimeout</code>: unha duración que controla durante canto tempo se agarda ata que se abandona o intento de conectarse ao servidor. O valor predefinido depende do controlador.</li>        <li><code>CommandTimeout</code>: unha duración que controla durante canto tempo se permite executar a consulta do lado do servidor antes de cancelarse. O valor predefinido depende do controlador.</li><li><code>NormalizeDatabaseName</code>: unha lóxica (true/false) que establece se se organiza o nome da base de datos en maiúsculas ou se se interpreta literalmente (o valor predefinido é true).</li></ul>O parámetro do rexistro especifícase como [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Enumera as táboas nun proxecto de IBM Netezza.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



