---
title: Snowflake.Databases
---

# Snowflake.Databases


Importeu dades des d'un magatzem de Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula amb una llista de les taules incloses al `magatzem` de l'Snowflake Computing ubicat al `servidor`. Es pot especificar un paràmetre de registre opcional, `options`, per controlar les opcions següents:

-   `Funció`: valor de text que s'utilitzarà com a Nom de la funció per a la connexió.
-   `CreateNavigationProperties`: valor lògic ("true" o "false") que estableix si s'han de generar les propietats de navegació als valors retornats (el valor per defecte és "true").
-   `ConnectionTimeout`: nombre de segons que cal esperar les respostes de xarxa de l'Snowflake.
-   `CommandTimeout`: nombre de segons que cal esperar perquè s'executi una consulta.


## Examples

### Example #1
Enumereu les taules d'un magatzem de l'Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



