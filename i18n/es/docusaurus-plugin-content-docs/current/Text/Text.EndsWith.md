---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Indica si el texto termina en el valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Indica si el texto especificado, <code>text</code>, termina con el valor especificado, <code>substring</code>. La indicación distingue mayúsculas de minúsculas.      <div>        <code>comparer</code> es un elemento <code>Comparer</code> que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones compatibles con la referencia cultural y la configuración regional, o bien que no distingan mayúsculas de minúsculas.      </div>      <div>        Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: se usa para realizar una comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: se usa para realizar una comparación ordinal exacta que no distinga mayúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: se usa para realizar una comparación que tiene en cuenta la referencia cultural</li>      </ul>


## Examples

### Example #1 
Comprobar si &#34;Hola, mundo&#34; termina con &#34;mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Comprobar si &#34;Hola, mundo&#34; termina con &#34;Mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
