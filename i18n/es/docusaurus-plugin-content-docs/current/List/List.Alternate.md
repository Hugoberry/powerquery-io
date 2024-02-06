---
title: List.Alternate
---

# List.Alternate


Devuelve una lista formada por todos los elementos de desplazamiento con numeración impar de una lista.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Remarks

Devuelve una lista formada por todos los elementos de desplazamiento con numeración impar de una lista. Alterna entre tomar y omitir los valores de la lista <code>list</code> en función de los parámetros.    <ul>    <li><code>count</code>: especifica el número de valores que se omiten cada vez.</li>    <li><code>repeatInterval</code>: un intervalo opcional de repetición para indicar cuántos valores se agregan entre los valores omitidos.</li>    <li><code>offset</code>: un parámetro de desplazamiento opcional para comenzar a omitir los valores en el desplazamiento inicial.</li>    </ul>


## Examples

### Example #1 
Crear una lista de \{1..10} que omite el primer número.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Crear una lista de \{1..10} que omite números alternos.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Crear una lista de \{1..10} que comienza en 1 y omite números alternos.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Crear una lista de \{1..10} que comienza en 1, omite un valor, conserva dos, y así sucesivamente.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
