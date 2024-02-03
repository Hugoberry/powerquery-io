---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Devuelve la primera posición del valor (- 1 si no se encuentra).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Devuelve la posición de la repetición especificada del valor text <code>substring</code> encontrado en <code>text</code>.    Se puede usar un parámetro opcional <code>occurrence</code> para especificar la posición de repetición que se devolverá (de forma predeterminada, la primera repetición).    Devuelve el valor -1 si no se encuentra <code>substring</code>.      <div>        <code>comparer</code> es un elemento <code>Comparer</code> que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones compatibles con la referencia cultural y la configuración regional, o bien que no distingan mayúsculas de minúsculas.      </div>      <div>        Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: se usa para realizar una comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: se usa para realizar una comparación ordinal exacta que no distinga mayúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: se usa para realizar una comparación que tiene en cuenta la referencia cultural</li>      </ul>


## Examples

### Example #1 
Obtener la posición de la primera coincidencia de &#34;mundo&#34; en el texto &#34;Hola mundo. Hola mundo&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Obtener la posición de la última coincidencia de &#34;mundo&#34; en el texto &#34;Hola, mundo. Hola, mundo&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
