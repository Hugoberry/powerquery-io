---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

Devolve os cubos nunha instancia de Essbase agrupada por un servidor Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa de cubos agrupados por un servidor Essbase desde unha instancia de Essbase no servidor APS <code>url</code>. Pode especificarse un rexistro opcional, <code>options</code>, para controlar as seguintes opcións:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido &#233; de dez minutos.</li></ul>



## Category
Accessing data
