---
title: Oracle.Database
---

# Oracle.Database


## Description

Devolve unha táboa de táboas e vistas SQL dunha base de datos Oracle Database.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de táboas e visualizacións SQL dunha base de datos Oracle Database no servidor <code>server</code>. O porto pódese especificar opcionalmente co servidor, separado con dous puntos. Pódese especificar un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:    <ul><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li><li><code>Query</code> : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, s&#243; se devolver&#225; o primeiro.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.    



## Category
Accessing data
