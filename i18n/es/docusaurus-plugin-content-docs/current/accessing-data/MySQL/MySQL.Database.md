---
title: MySQL.Database
---

# MySQL.Database


Devuelve una tabla de tablas, vistas y funciones escalares almacenadas SQL disponibles en una base de datos MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de tablas, vistas y funciones escalares almacenadas SQL disponibles en una base de datos MySQL en el servidor <code>server</code> de la instancia de base de datos denominada <code>database</code>. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>Encoding</code> : Valor TextEncoding que especifica el juego de caracteres usado para codificar todas las consultas enviadas al servidor (el valor predeterminado es &quot;null&quot;).</li><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li><li><code>Query</code> : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolver&#225; el primero.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>TreatTinyAsBoolean</code> : Un valor l&#243;gico (True o False) que determina si forzar columnas tinyint en el servidor como valores l&#243;gicos. El valor predeterminado es True.</li><li><code>OldGuids</code> : Un valor l&#243;gico (True o False) que establece si las columnas char(36) (si su valor es False) o las columnas binary(16) (si su valor es True) se tratar&#225;n como GUID. El valor predeterminado es False.</li><li><code>ReturnSingleDatabase</code> : Un valor l&#243;gico (True o False) que determina si devolver todas las tablas de todas las bases de datos (si el valor es False) o si devolver las tablas y las vistas de la base de datos especificada (si el valor es True). El valor predeterminado es False.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li></ul>    El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...] o [Query = "select ..."], por ejemplo.    



## Category
Accessing data
