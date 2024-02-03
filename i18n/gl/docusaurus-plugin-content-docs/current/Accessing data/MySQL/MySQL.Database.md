---
title: MySQL.Database
---

# MySQL.Database


## Description

Devolve unha táboa de táboas, vistas e funcións escalares almacenadas SQL dispoñibles nunha base de datos MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de táboas, visualizacións e funcións escalares almacenadas de SQL dispoñibles nunha base de datos MySQL no servidor <code>server</code> da instancia de base de datos co nome <code>database</code>. O porto pódese especificar opcionalmente co servidor, separado con dous puntos. Pódese especificar un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:    <ul><li><code>Encoding</code> : Un valor TextEncoding que especifica o conxunto de caracteres usado para codificar todas as consultas enviadas ao servidor (o valor predefinido &#233; nulo).</li><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li><li><code>Query</code> : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, s&#243; se devolver&#225; o primeiro.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>TreatTinyAsBoolean</code> : Unha funci&#243;n l&#243;xica (true/false) que determina se forzar columnas tinyint no servidor como valores l&#243;xicos. O valor predefinido &#233; true.</li><li><code>OldGuids</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se as columnas char(36) (se &#233; false) ou binary(16) (se &#233; true) se tratar&#225;n como GUID. O valor predefinido &#233; false.</li><li><code>ReturnSingleDatabase</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se devolver todas as t&#225;boas de todas as bases de datos (se &#233; false) ou se devolver t&#225;boas e visualizaci&#243;ns da base de datos especificada (se &#233; true). O valor predefinido &#233; false.</li><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.    



## Category
Accessing data
