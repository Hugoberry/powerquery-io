---
title: DB2.Database
---

# DB2.Database


## Description

Devolve unha táboa de táboas e vistas SQL dispoñibles nunha base de datos Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de táboas e vistas SQL dispoñibles nunha base de datos Db2 no servidor <code>server</code> na instancia de base de datos co nome <code>database</code>. O porto pódese especificar opcionalmente co servidor, separado con dous puntos. Pódese especificar un parámetro de rexistro opcional, <code>options</code>, para controlar as opcións seguintes:    <ul><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li><li><code>Query</code> : Unha consulta SQL nativa usada para recuperar datos. Se a consulta produce varios conxuntos de resultados, s&#243; se devolver&#225; o primeiro.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li><li><code>Implementation</code> : Especifica a implantaci&#243;n do fornecedor de bases de datos interno que se vai usar. Os valores v&#225;lidos son: &quot;IBM&quot; e &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : N&#250;mero do CCSID (identificador codificado de conxunto de caracteres) para descodificar datos binarios de Db2 FOR BIT en cadeas de caracteres. Apl&#237;case a Implementation = &quot;Microsoft&quot;. Estableza 0 para desactivar a conversi&#243;n (valor predefinido). Estableza 1 para converter segundo a codificaci&#243;n da base de datos. Estableza outro n&#250;mero de CCSID para converter &#225; codificaci&#243;n da aplicaci&#243;n.</li><li><code>PackageCollection</code> : Especifica un valor de cadea para a colecci&#243;n de paquetes (o valor predefinido &#233; &quot;NULLID&quot;) para permitir o uso de paquetes compartidos necesarios para procesar instruci&#243;ns SQL. Apl&#237;case a Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Especifica se a conexi&#243;n se realiza a trav&#233;s dunha pasarela Db2 Connect. Apl&#237;case a Implementaci&#243;n = &quot;Microsoft&quot;.</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...] ou [Query = "select ..."], por exemplo.    



## Category
Accessing data
