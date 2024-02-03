---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importa datos dun almacén de Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa cunha lista de táboas no <code>almacén</code> de Snowflake Computing situado no <code>servidor</code>. Pode especificarse un parámetro de rexistro opcional, <code>opcións</code>, para controlar as seguintes opcións:<ul><li><code>Función</code>: valor de texto que se usará como nome da función para a conexión.</li><li><code>CreateNavigationProperties</code>: valor lóxico (verdadeiro ou falso) que establece se se xerarán propiedades de navegación nos valores devoltos (o valor predefinido é verdadeiro).</li><li><code>ConnectionTimeout</code>: número de segundos que se debe esperar polas respostas de rede de Snowflake.</li><li><code>CommandTimeout</code>: número de segundos que se debe esperar para que se execute a consulta.</li></ul>    


## Examples

### Example #1 
Enumera as táboas nun almacén de Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



