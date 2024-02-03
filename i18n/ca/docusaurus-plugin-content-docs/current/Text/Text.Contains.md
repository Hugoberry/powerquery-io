---
title: Text.Contains
---

# Text.Contains


## Description

Retorna si el text conté la subcadena.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Permet detectar si <code>text</code> conté el valor <code>substring</code>. Retorna "true" si es troba el valor. Aquesta funció no és compatible amb caràcters comodí ni expressions regulars.      <br />      <br />      L'argument opcional <code>comparer</code> es pot fer servir per especificar comparacions que no distingeixen entre majúscules i minúscules i comparacions amb reconeixement cultural i local.      Els comparadors integrats següents estan disponibles en el llenguatge de fórmules:      <ul>        <li><code>Comparer.Ordinal</code>: s'utilitza per dur a terme una comparació ordinal que distingeix entre majúscules i minúscules.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: s'utilitza per fer una comparació ordinal que no distingeix entre majúscules i minúscules.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per efectuar una consulta amb reconeixement cultural.</li>      </ul>


## Examples

### Example #1 
Troba si el text &#34;Hello World&#34; conté &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Troba si el text &#34;Hello World&#34; conté &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Permet trobar si el text &#34;Hola, món&#34; conté la paraula &#34;hola&#34; mitjançant un comparador que no distingeix entre majúscules i minúscules.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
