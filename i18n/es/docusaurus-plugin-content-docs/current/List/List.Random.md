---
title: List.Random
---

# List.Random


## Description

Devuelve una lista de números aleatorios.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Devuelve una lista de números aleatorios entre 0 y 1, especificado el número de valores que se generarán y un valor de inicialización opcional.<ul>   <li><code>count</code>: número de valores aleatorios que generar.</li>   <li><code>seed</code>: <i>[opcional]</i> valor numérico que se usa para inicializar el generador de números aleatorios. Si se omite, se genera una lista única de números aleatorios cada vez que se llama a la función. Si especifica el valor de inicialización con un número, cada llamada a la función generará la misma lista de números aleatorios.</li></ul>


## Examples

### Example #1 
Crear una lista de tres números aleatorios.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Crear una lista de tres números aleatorios, especificando el valor de inicialización.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
