---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Importeu dades des d&#39;un magatzem de Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Retorna una taula amb una llista de les taules incloses al <code>magatzem</code> de l'Snowflake Computing ubicat al <code>servidor</code>. Es pot especificar un paràmetre de registre opcional, <code>options</code>, per controlar les opcions següents:<ul><li><code>Funció</code>: valor de text que s'utilitzarà com a Nom de la funció per a la connexió.</li><li><code>CreateNavigationProperties</code>: valor lògic ("true" o "false") que estableix si s'han de generar les propietats de navegació als valors retornats (el valor per defecte és "true").</li><li><code>ConnectionTimeout</code>: nombre de segons que cal esperar les respostes de xarxa de l'Snowflake.</li><li><code>CommandTimeout</code>: nombre de segons que cal esperar perquè s'executi una consulta.</li></ul>    


## Examples

### Example #1 
Enumereu les taules d&#39;un magatzem de l&#39;Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



