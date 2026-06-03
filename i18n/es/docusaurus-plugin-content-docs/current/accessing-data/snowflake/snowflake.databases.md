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

Devuelve una tabla que enumera las tablas en `warehouse` de Snowflake Computing en `server`. Se puede especificar un parámetro de registro opcional, `options`, para controlar las siguientes opciones:

-   `Role`: un valor de texto para usarlo como nombre de rol para la conexión.
-   `CreateNavigationProperties`: un valor lógico (true o false) que establece si se generan propiedades de navegación en los valores devueltos (el valor predeterminado es true)
-   `ConnectionTimeout`: el número de segundos que se esperará por las respuestas de red de Snowflake.
-   `CommandTimeout`: el número de segundos que se esperará para que se ejecute una consulta.


## Examples

### Example #1
Enumera las tablas en un almacén de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



