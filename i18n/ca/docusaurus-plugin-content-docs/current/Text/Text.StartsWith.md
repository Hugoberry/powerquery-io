---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Indica si el text comença amb un valor especificat.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Retorna true si el valor de text <code>text</code> comença amb el valor de text <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> valor <code>text</code> que s'ha de cercar.</li>        <li><code>substring</code>: <i></i> valor <code>text</code> que és la subcadena que s'ha de cercar a <code>substring</code>.</li>        <li><code>comparer</code>: <i>[opcional]</i> un element <code>Comparer</code> que s'utilitza per controlar la comparació. Per exemple, <code>Comparer.OrdinalIgnoreCase</code> es pot utilitzar per fer cerques sense distinció de majúscules i minúscules.</li>      </ul>      <div>        <code>comparer</code> és un element <code>Comparer</code> que s'utilitza per controlar la comparació. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de la cultura i la configuració regional.      </div>      <div>        Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: s'utilitza per fer una comparació ordinal exacta.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per fer una comparació amb detecció de cultura.</li>      </ul>


## Examples

### Example #1 
Comprova si el text &#34;Hello, World&#34; comença amb el text &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Comprova si el text &#34;Hello, World&#34; comença amb el text &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
