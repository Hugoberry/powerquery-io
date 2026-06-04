---
title: Essbase.Cubes
---

# Essbase.Cubes


Retorna els clubs d'una instància de l'Essbase agrupats per servidor de l'Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Retorna una taula de cubs agrupats per servidor de l'Essbase a partir d'una instància de l'Essbase al servidor de l'APS `url`. És possible especificar un paràmetre de registre opcional `options` per controlar les opcions següents:

-   `CommandTimeout` : Duració que controla el temps en què la consulta del servidor es pot executar abans que es cancel·li. El valor per defecte és de deu minuts.



## Category
Accessing data
