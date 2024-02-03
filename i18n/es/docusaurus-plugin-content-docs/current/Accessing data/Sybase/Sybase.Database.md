---
title: Sybase.Database
---

# Sybase.Database


## Description

Devuelve una tabla de tablas y vistas de SQL disponibles en una base de datos Sybase.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devuelve una tabla de tablas y vistas SQL disponibles en una base de datos Sybase en el servidor <code>server</code> de la instancia de base de datos denominada <code>database</code>. Es posible especificar el puerto con el servidor, separado por dos puntos. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>CreateNavigationProperties</code> : Un valor l&#243;gico (True o False) que establece si se deben generar propiedades de navegaci&#243;n en los valores devueltos (el valor predeterminado es True).</li><li><code>NavigationPropertyNameGenerator</code> : Una funci&#243;n que se usa para crear nombres para las propiedades de navegaci&#243;n.</li><li><code>Query</code> : Una consulta SQL nativa usada para recuperar datos. Si la consulta produce varios conjuntos de resultados, solo se devolver&#225; el primero.</li><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li><li><code>ConnectionTimeout</code> : Duraci&#243;n que controla cu&#225;nto tiempo de espera es necesario antes de abandonar un intento de establecer una conexi&#243;n con el servidor. El valor predeterminado depende del controlador.</li><li><code>HierarchicalNavigation</code> : Un valor l&#243;gico (True o False) que establece si se deben ver las tablas agrupadas por sus nombres de esquema (el valor predeterminado es False).</li></ul>    El parámetro de registro se especifica como [opción1 = valor1, opción2 = valor2...] o [Query = "select ..."], por ejemplo.    



## Category
Accessing data
