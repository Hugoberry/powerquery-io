---
title: Sql.Databases
---

# Sql.Databases


Devuelve una tabla de bases de datos de SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de bases de datos en el servidor SQL Server especificado, <code>server</code>. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li><li><code>MaxDegreeOfParallelism</code> : Un n&#250;mero que establece el valor de la cl&#225;usula de consulta &quot;maxdop&quot; de la consulta SQL generada.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li><li><code>MultiSubnetFailover</code> : Valor l&#243;gico (True o False) que define el valor de la propiedad &quot;MultiSubnetFailover&quot; en la cadena de conexi&#243;n (el valor predeterminado es False).</li><li><code>UnsafeTypeConversions</code> : Operador l&#243;gico (&quot;true&quot; o &quot;false&quot;) que, si es &quot;true&quot;, intenta plegar las conversiones de tipos que pueden generar un error y provocar errores en toda la consulta. No se recomienda para uso general.</li><li><code>ContextInfo</code> : Valor binario que se usa para establecer CONTEXT_INFO antes de ejecutar cada comando.</li><li><code>OmitSRID</code> : Operador l&#243;gico (&quot;true&quot; o &quot;false&quot;) que, si es &quot;true&quot;, omite el SRID cuando se produce texto conocido a partir de tipos de geometr&#237;a y geogr&#225;ficos.</li><li><code>EnableCrossDatabaseFolding</code> : Valor l&#243;gico (VERDADERO/FALSO) que, si es VERDADERO, permitir&#225; plegar consultas a bases de datos en el mismo servidor. El valor predeterminado es FALSO.</li></ul>    El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...], por ejemplo.    <br />    No admite establecer una consulta SQL para que se ejecute en el servidor. En su lugar, para ejecutar una consulta SQL, se debe usar <code>Sql.Database</code>.    



## Category
Accessing data
