---
title: DB2.Database
---

# DB2.Database


Devuelve una tabla de tablas y vistas de SQL disponibles en una base de datos Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas y vistas SQL disponibles en una base de datos Db2 en el servidor <code>server</code> de la instancia de base de datos denominada <code>database</code>. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li><li><code>Query</code> : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolver&#225; el primero.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li><li><code>Implementation</code> : Especifica la implementaci&#243;n interna del proveedor de base de datos que se debe usar. Los valores v&#225;lidos son: &quot;IBM&quot; y &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : N&#250;mero del CCSID (Identificador codificado del juego de caracteres) para descodificar datos binarios Db2 FOR BIT en cadenas de caracteres. Se aplica a Implementation = &quot;Microsoft&quot;. Establ&#233;zcalo en 0 para deshabilitar la conversi&#243;n (valor predeterminado). Establ&#233;zcalo en 1 para realizar la conversi&#243;n seg&#250;n la codificaci&#243;n de la base de datos. Establezca otro n&#250;mero de CCSID para realizar la conversi&#243;n de acuerdo con la codificaci&#243;n de la aplicaci&#243;n.</li><li><code>PackageCollection</code> : Especifica un valor de cadena para la colecci&#243;n de paquetes (el valor predeterminado es &quot; NULLID&quot;) para habilitar el uso de los paquetes compartidos necesarios para procesar instrucciones SQL. Se aplica a Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Especifica si la conexi&#243;n se realiza a trav&#233;s de una puerta de enlace de DB2 Connect. Se aplica a la implementaci&#243;n = &quot;Microsoft&quot;.</li></ul>    El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...] o [Query = "select ..."], por ejemplo.    



## Category
Accessing data
