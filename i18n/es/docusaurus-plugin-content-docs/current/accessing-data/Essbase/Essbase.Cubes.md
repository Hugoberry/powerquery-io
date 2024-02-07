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

Devuelve una tabla de cubos agrupada por el servidor de Essbase desde una instancia de Essbase en el servidor de APS <code>url</code>. Se puede especificar un parámetro de registro adicional, <code>options</code>, para controlar las opciones siguientes:    <ul><li><code>CommandTimeout</code> : Duraci&#243;n que controla durante cu&#225;nto tiempo se permite la ejecuci&#243;n de la consulta del lado servidor antes de cancelarla. El valor predeterminado es de 10&#160;minutos.</li></ul>



## Category
Accessing data
