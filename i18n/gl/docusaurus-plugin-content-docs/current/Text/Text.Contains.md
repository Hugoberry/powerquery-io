---
title: Text.Contains
---

# Text.Contains


## Description

Devolve se o texto contén a subcadea.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Detecta se <code>text</code> contén o valor <code>substring</code>. Devolve "true" se se atopa o valor. Esta función non admite comodíns nin expresións regulares.      <br />      <br />      O argumento opcional <code>comparer</code> pode usarse para especificar comparacións que non distingan maiúsculas de minúsculas ou que teñan en conta a referencia cultural e a configuración rexional.      Os seguintes comparadores integrados están dispoñibles na linguaxe da fórmula:      <ul>        <li><code>Comparer.Ordinal</code>: úsase para realizar unha comparación ordinal que distingue entre maiúsculas e minúsculas</li>        <li><code>Comparer.OrdinalIgnoreCase</code>:  úsase para realizar unha comparación ordinal que non distingue maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: úsase para realizar unha comparación de recoñecemento de referencias culturais</li>      </ul>


## Examples

### Example #1 
Buscar se o texto &#34;Ola, mundo&#34; contén &#34;Ola&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Buscar se o texto &#34;Ola, mundo&#34; contén &#34;ola&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Busque se o texto “Ola mundo” contén “ola” usando un comparador que non distingue entre maiúsculas e minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
