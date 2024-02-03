---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Indica si el text acaba amb el valor especificat.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Indica si el text proporcionat, <code>text</code>, acaba amb el valor especificat, <code>substring</code>. La indicació distingeix entre majúscules i minúscules.      <div>        <code>comparer</code> és un element <code>Comparer</code> que s'utilitza per controlar la comparació. Es poden utilitzar comparadors per fer comparacions sense distinció de majúscules i minúscules o amb detecció de cultura i configuració regional.      </div>      <div>        Els següents comparadors integrats estan disponibles en el llenguatge de fórmules:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: s'utilitza per fer una comparació ordinal exacta.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: s'utilitza per fer una comparació ordinal exacta sense distinció de majúscules i minúscules.</li>        <li> <code>Comparer.FromCulture</code>: s'utilitza per fer una comparació amb detecció de cultura.</li>      </ul>


## Examples

### Example #1 
Comprova si &#34;Hello, World&#34; acaba amb &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Comprova si &#34;Hello, World&#34; acaba amb &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
