---
title: Text.Contains
---

# Text.Contains


Indica se o texto contém a subcadeia.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Deteta se <code>text</code> contém o valor <code>substring</code>. Devolve "true" se o valor for encontrado. Esta função não suporta carateres universais nem expressões regulares.      <br />      <br />      O argumento opcional <code>comparer</code> pode ser utilizado para especificar comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura ou na região.      Os comparadores incorporados que se seguem estão disponíveis na linguagem da fórmula:      <ul>       <li><code>Comparer.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>        <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>      </ul>


## Examples

### Example #1 
Determinar se o texto &#34;Olá Mundo&#34; contém &#34;Olá&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Determinar se o texto &#34;Olá Mundo&#34; contém &#34;olá&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Saiba se o texto &#34;Hello World&#34; contém a palavra &#34;hello&#34;, utilizando um comparador não sensível a maiúsculas/minúsculas.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
