---
title: Essbase.Cubes
---

# Essbase.Cubes


Devuelve los cubos de una instancia de Essbase agrupados por servidor de Essbase.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla de cubos agrupada por el servidor de Essbase desde una instancia de Essbase en el servidor de APS `url`. Se puede especificar un parámetro de registro adicional, `options`, para controlar las opciones siguientes:

-   `CommandTimeout` : Duración que controla durante cuánto tiempo se permite la ejecución de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10 minutos.



## Category
Accessing data
