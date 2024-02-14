---
title: Text.StartsWith
---

# Text.StartsWith


Indica si el texto empieza con un valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Devuelve true si el valor de texto <code>text</code> empieza con el valor de texto <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> un valor <code>text</code> en el que se va a buscar</li>        <li><code>substring</code>: <i></i> un valor <code>text</code> que es la subcadena que se buscará en <code>substring</code></li>        <li><code>comparer</code>: <i>[Optional]</i> Un <code>Comparer</code> que se usa para controlar la comparación. Por ejemplo, <code>Comparer.OrdinalIgnoreCase</code> se puede usar para realizar búsquedas que no distinguen mayúsculas de minúsculas</li>      </ul>      <div>        <code>comparer</code> es un elemento <code>Comparer</code> que se usa para controlar la comparación. Los comparadores se pueden usar para proporcionar comparaciones compatibles con la referencia cultural y la configuración regional, o bien que no distingan mayúsculas de minúsculas.      </div>      <div>        Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: se usa para realizar una comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: se usa para realizar una comparación ordinal exacta que no distinga mayúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: se usa para realizar una comparación que tiene en cuenta la referencia cultural</li>      </ul>


## Examples

### Example #1 
Comprobar si el texto &#34;Hola mundo&#34; empieza con el texto &#34;hola&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Comprobar si el texto &#34;Hola mundo&#34; empieza con el texto &#34;Hola&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
