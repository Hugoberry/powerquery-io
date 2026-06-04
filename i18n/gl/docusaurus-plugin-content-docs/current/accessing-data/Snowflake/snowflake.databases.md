---
title: Snowflake.Databases
---

# Snowflake.Databases


Importa datos dun almacén de Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa cunha lista de táboas no `almacén` de Snowflake Computing situado no `servidor`. Pode especificarse un parámetro de rexistro opcional, `opcións`, para controlar as seguintes opcións:

-   `Función`: valor de texto que se usará como nome da función para a conexión.
-   `CreateNavigationProperties`: valor lóxico (verdadeiro ou falso) que establece se se xerarán propiedades de navegación nos valores devoltos (o valor predefinido é verdadeiro).
-   `ConnectionTimeout`: número de segundos que se debe esperar polas respostas de rede de Snowflake.
-   `CommandTimeout`: número de segundos que se debe esperar para que se execute a consulta.


## Examples

### Example #1
Enumera as táboas nun almacén de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



