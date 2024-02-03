---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Indica se o texto comeza cun valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Devolve true se o valor de texto <code>text</code> comeza co valor de texto <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> un valor <code>text</code> que se vai buscar</li>        <li><code>substring</code>: <i></i> un valor <code>text</code> que é a subcadea que se vai buscar en <code>substring</code></li>        <li><code>comparer</code>: <i>[opcional]</i> un <code>Comparer</code> que se usa para controlar a comparación. Por exemplo, pódese usar <code>Comparer.IgnoreCase</code> para realizar buscas que non diferencian maiúsculas de minúsculas</li>      </ul>      <div>        <code>comparer</code> é un <code>Comparer</code> que se usa para controlar a comparación. Os comparadores pódense usar para comparacións que non diferencian maiúsculas de minúsculas ou que recoñecen referencias culturais e a configuración rexional.      </div>      <div>        Os seguintes comparadores incorporados están dispoñibles na linguaxe da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal exacta</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: úsase para realizar unha comparación ordinal exacta que non diferencie maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: úsase para realizar unha comparación de recoñecemento de referencias culturais</li>      </ul>


## Examples

### Example #1 
Comprobar se o texto &#34;Ola, mundo&#34; comeza co texto &#34;ola&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Comprobe se o texto &#34;Ola, mundo&#34; comeza co texto &#34;Ola&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
