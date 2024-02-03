---
title: Text.Contains
---

# Text.Contains


## Description

Devuelve si el texto contiene la subcadena.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Detecta si <code>text</code> contiene el valor <code>substring</code>. Devuelve true si se encuentra el valor. Esta función no admite caracteres comodín ni expresiones regulares.      <br />      <br />      El argumento opcional <code>comparer</code> se puede usar para especificar comparaciones que no distinguen mayúsculas de minúsculas o que tengan en cuenta la referencia cultural y la configuración regional.      Los siguientes comparadores integrados están disponibles en el lenguaje de fórmulas:      <ul>        <li><code>Comparer.Ordinal</code>: se usa para realizar una comparación ordinal que distingue mayúsculas de minúsculas</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: se usa para realizar una comparación ordinal con distinción de mayúsculas y minúsculas</li>        <li> <code>Comparer.FromCulture</code>: se usa para realizar una comparación con reconocimiento de referencia cultural</li>      </ul>


## Examples

### Example #1 
Buscar si el texto &#34;Hola mundo&#34; contiene &#34;Hola&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Buscar si el texto &#34;Hola mundo&#34; contiene &#34;hola&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Permite buscar si el texto &#34;Hola mundo&#34; contiene &#34;hola&#34;, usando un comparador que no distingue mayúsculas de minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
