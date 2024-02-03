---
title: Vertica.Database
---

# Vertica.Database


## Description

Importa datos de Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa dos esquemas dispoñibles no servidor denominado mediante o parámetro <code>server</code> na base de datos denominada polo parámetro <code>database</code>.É posible fornecer un parámetro de rexistro opcional, <code>options</code>, para especificar propiedades adicionais. Este rexistro pode conter os seguintes campos:<ul>    <li><code>ConnectionTimeout</code>: duración que controla o período que hai que agardar antes de abandonar unha tentativa de establecemento de conexión co servidor. O valor predefinido depende do controlador.</li>    <li><code>CommandTimeout </code>: duración que controla o período no que se permite executar a consulta do lado servidor antes de cancelala. O valor predefinido depende do controlador.</li></ul>


## Examples

### Example #1 
Enumera as táboas en Vertica
```powerquery

```



