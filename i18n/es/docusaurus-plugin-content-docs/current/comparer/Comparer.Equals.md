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

Devuelve un valor <code>lógico</code> basado en la comprobación de igualdad sobre los dos valores dados, <code>x</code> y <code>y</code>, utilizando el <code>comparer</code>.      <div>        <code>comparer</code>es un <code>Comparador</code> que se utiliza para controlar la comparación.        Un comparador es una función que acepta dos argumentos y devuelve -1, 0 o 1 en función de si el primer valor es menor, igual o mayor que el segundo.        Los comparadores pueden utilizarse para realizar comparaciones que no distingan entre mayúsculas y minúsculas o que tengan en cuenta la cultura y la localización.      </div>      <div>        El lenguaje de fórmulas dispone de los siguientes comparadores integrados:      </div>      <ul>        <li><code>Comparador.ordinal</code>: Se utiliza para realizar una comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Se utiliza para realizar una comparación ordinal exacta sin tener en cuenta mayúsculas y minúsculas</li>        <li> <code>Comparer.FromCulture</code>: Se utiliza para realizar una comparación que tenga en cuenta la cultura</li>      </ul>


## Examples

### Example #1 
Compara &#34;1&#34; y &#34;A&#34; usando la configuración regional &#34;en-US&#34; para determinar si los valores son iguales.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
