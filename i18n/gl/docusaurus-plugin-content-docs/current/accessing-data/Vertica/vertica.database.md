---
title: Vertica.Database
---

# Vertica.Database


Importa datos de Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa dos esquemas dispoñibles no servidor denominado mediante o parámetro `server` na base de datos denominada polo parámetro `database`. É posible fornecer un parámetro de rexistro opcional, `options`, para especificar propiedades adicionais. Este rexistro pode conter os seguintes campos:

-   `ConnectionTimeout`: duración que controla o período que hai que agardar antes de abandonar unha tentativa de establecemento de conexión co servidor. O valor predefinido depende do controlador.
-   `CommandTimeout` : duración que controla o período no que se permite executar a consulta do lado servidor antes de cancelala. O valor predefinido depende do controlador.


## Examples

### Example #1
Enumera as táboas en Vertica
```powerquery

```



