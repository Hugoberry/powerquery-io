---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Retorna els clubs d&#39;una instància de l&#39;Essbase agrupats per servidor de l&#39;Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Retorna una taula de cubs agrupats per servidor de l'Essbase a partir d'una instància de l'Essbase al servidor de l'APS <code>url</code>. És possible especificar un paràmetre de registre opcional <code>options</code> per controlar les opcions següents:    <ul><li><code>CommandTimeout</code> : Duraci&#243; que controla el temps en qu&#232; la consulta del servidor es pot executar abans que es cancel&#183;li. El valor per defecte &#233;s de deu minuts.</li></ul>



## Category
Accessing data
