---
title: Text.EndsWith
---

# Text.EndsWith


Indica se o texto termina no valor especificado.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Indica se o texto fornecido, <code>text</code>, termina com o valor especificado, <code>substring</code>. A indicação diferencia maiúsculas de minúsculas.      <div>        <code>comparer</code> é um <code>Comparer</code> que é usado para controlar a comparação. Os comparadores podem ser usados ​​para fornecer comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.      </div>      <div>        Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação com reconhecimento de cultura</li>      </ul>


## Examples

### Example #1 
Verifique se &#34;Olá, Mundo&#34; termina com &#34;mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Verifique se &#34;Olá, Mundo&#34; termina com &#34;Mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
