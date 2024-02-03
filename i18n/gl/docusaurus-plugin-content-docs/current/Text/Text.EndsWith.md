---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Indica se o texto finaliza no valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Indica se o texto indicado, <code>text</code>, finaliza co valor especificado, <code>substring</code>. A indicación diferencia maiúsculas de minúsculas.      <div>        <code>comparer</code> é un <code>Comparer</code> que se usa para controlar a comparación. Os comparadores pódense usar para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.      </div>      <div>        Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas</li>      </ul>


## Examples

### Example #1 
Comprobar se &#34;Ola, mundo&#34; finaliza con &#34;mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Comprobe se &#34;Ola, mundo&#34; finaliza con &#34;Mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
