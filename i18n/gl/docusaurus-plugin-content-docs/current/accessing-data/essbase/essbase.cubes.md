---
title: Essbase.Cubes
---

# Essbase.Cubes


Devolve os cubos nunha instancia de Essbase agrupada por un servidor Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa de cubos agrupados por un servidor Essbase desde unha instancia de Essbase no servidor APS `url`. Pode especificarse un rexistro opcional, `options`, para controlar as seguintes opcións:

-   `CommandTimeout` : Duración que controla o tempo que pode executarse a consulta no servidor antes de que se cancele. O valor predefinido é de dez minutos.



## Category
Accessing data
