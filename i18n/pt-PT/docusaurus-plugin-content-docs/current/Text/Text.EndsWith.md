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

Indica se o texto especificado, <code>text</code>, termina com o valor especificado, <code>substring</code>. A indicação é sensível a maiúsculas e minúsculas.      <div>         <code>comparer</code>é um <code>Comparer</code> que é utilizado no controlo da comparação. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura ou na região.      </div>      <div>        Os comparadores incorporados seguintes estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>        <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>      </ul>


## Examples

### Example #1 
Verificar se &#34;Olá, Mundo&#34; termina com &#34;mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Verificar se &#34;Olá, Mundo&#34; termina com &#34;Mundo&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
