---
title: List.Generate
---

# List.Generate


## Description

Genera una lista de valores.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Genera una lista de valores mediante las funciones proporcionadas. La función <code>initial</code> genera un valor candidato inicial, que se prueba con <code>condition</code>.    Si se aprueba el valor candidato, se devuelve como parte de la lista resultante y se genera el siguiente valor candidato al pasar el valor recién aprobado a <code>next</code>.    Cuando un valor candidato no coincide con <code>condition</code>, se detiene el proceso de generación de listas.    También se puede proporcionar un parámetro opcional, <code>selector</code>, para transformar los elementos de la lista resultante.


## Examples

### Example #1 
Crea una lista empezando desde diez y disminuye repetidamente por uno, mientras se asegura de que cada elemento sea mayor que cero.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Generar una lista de registros que contiene x e y, donde x es un valor e y es una lista. x debe ser menor que 10 y representa el número de elementos de la lista y. Después de generar la lista, devolver solo los valores x.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
