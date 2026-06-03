---
title: Comparer.Equals
---

# Comparer.Equals


Devuelve un valor lógico basado en la comparación de igualdad de dos valores determinados.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Devuelve un valor `lógico` basado en la comprobación de igualdad sobre los dos valores dados, `x` y `y`, utilizando el `comparer`.

`comparer`es un `Comparador` que se utiliza para controlar la comparación. Un comparador es una función que acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo. Los comparadores pueden utilizarse para realizar comparaciones que no distingan entre mayúsculas y minúsculas o que tengan en cuenta la cultura y la localización.

El lenguaje de fórmulas dispone de los siguientes comparadores integrados:

-   `Comparador.ordinal`: Se utiliza para realizar una comparación ordinal exacta
-   `Comparer.OrdinalIgnoreCase`: Se utiliza para realizar una comparación ordinal exacta sin tener en cuenta mayúsculas y minúsculas
-   `Comparer.FromCulture`: Se utiliza para realizar una comparación que tenga en cuenta la cultura


## Examples

### Example #1
Compara "1" y "A" usando la configuración regional "en-US" para determinar si los valores son iguales.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
