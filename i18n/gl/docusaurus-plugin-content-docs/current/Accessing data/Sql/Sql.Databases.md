---
title: Sql.Databases
---

# Sql.Databases


## Description

Devolve unha táboa de bases de datos nun SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de bases de datos do servidor SQL especificado, <code>server</code>. Pode especificarse un parámetro de rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul><li><code>CreateNavigationProperties</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se xerar propiedades de navegaci&#243;n nos valores devoltos (o valor predefinido &#233; true).</li><li><code>NavigationPropertyNameGenerator</code> : Unha funci&#243;n que se usa para crear nomes de propiedades de navegaci&#243;n.</li><li><code>MaxDegreeOfParallelism</code> : Un n&#250;mero que establece o valor da cl&#225;usula de consulta &quot;maxdop&quot; na consulta SQL xerada.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla o tempo que se debe agardar antes de abandonar un intento de conexi&#243;n co servidor. O valor predefinido depende do controlador.</li><li><code>HierarchicalNavigation</code> : Unha funci&#243;n l&#243;xica (true/false) que establece se ver as t&#225;boas agrupadas polos nomes de esquema (o valor predefinido &#233; false).</li><li><code>MultiSubnetFailover</code> : Unha funci&#243;n l&#243;xica (true/false) que establece o valor da propiedade &quot;MultiSubnetFailover&quot; na cadea de conexi&#243;n (o valor predefinido &#233; false).</li><li><code>UnsafeTypeConversions</code> : Valor l&#243;xico (verdadeiro/falso) que, se &#233; verdadeiro, tenta dobrar conversi&#243;ns de tipo que poder&#237;an producir un erro e provocar que toda a consulta falle. Non se recomenda para uso xeral.</li><li><code>ContextInfo</code> : Un valor binario que se usa para configurar CONTEXT_INFO antes de executar cada comando.</li><li><code>OmitSRID</code> : Valor l&#243;xico (verdadeiro/falso) que, se &#233; verdadeiro, omite o SRID ao producir Well-Known Text a partir de tipos de xeometr&#237;a e xeograf&#237;a.</li><li><code>EnableCrossDatabaseFolding</code> : Un valor l&#243;xico (verdadeiro/falso) que, se &#233; verdadeiro, permite a delegaci&#243;n de consultas en todas as bases de datos no mesmo servidor. O valor predefinido &#233; falso.</li></ul>    O parámetro de rexistro especifícase como [option1 = value1, option2 = value2...] por exemplo.    <br />    Non admite a configuración dunha consulta SQL para que se execute no servidor. No seu lugar debe usarse <code>Sql.Database</code> para executar unha consulta SQL.    



## Category
Accessing data