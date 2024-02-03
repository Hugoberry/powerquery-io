---
title: List.Random
---

# List.Random


## Description

Retorna una llista de nombres aleatoris.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Details

Retorna una llista de nombres aleatoris entre 0 i 1, donat el nombre de valors que s'han de generar i un valor de propagació opcional.<ul>   <li><code>count</code>: nombre de valors aleatoris que s'han de generar.</li>   <li><code>seed</code>:  <i>[Opcional]</i> valor numèric que s'utilitza per propagar el generador de nombres aleatoris. Si s'omet, es genera una llista única de nombres aleatoris cada vegada que crideu la funció. Si especifiqueu el valor de propagació amb un nombre, cada crida de la funció genera la mateixa llista de nombres aleatoris.</li></ul>


## Examples

### Example #1 
Crea una llista de 3 nombres aleatoris.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Crea una llista de 3 nombres aleatoris, que especifiquen un valor de propagació.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
