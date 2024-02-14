---
title: Snowflake.Databases
---

# Snowflake.Databases


Importa datos de un almacén de Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que enumera las tablas en <code>warehouse</code> de Snowflake Computing en <code>server</code>. Se puede especificar un parámetro de registro opcional, <code>options</code>, para controlar las siguientes opciones:<ul><li><code>Role</code>: un valor de texto para usarlo como nombre de rol para la conexión.</li><li><code>CreateNavigationProperties</code>: un valor lógico (true o false) que establece si se generan propiedades de navegación en los valores devueltos (el valor predeterminado es true)</li><li><code>ConnectionTimeout</code>: el número de segundos que se esperará por las respuestas de red de Snowflake.</li><li><code>CommandTimeout</code>: el número de segundos que se esperará para que se ejecute una consulta.</li></ul>    


## Examples

### Example #1 
Enumera las tablas en un almacén de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



