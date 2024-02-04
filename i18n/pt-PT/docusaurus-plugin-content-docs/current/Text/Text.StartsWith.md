---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Indica se o texto começa com um valor especificado.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Devolve true se o valor de texto <code>text</code> começar com o valor de texto <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> um valor <code>text</code> a procurar</li>        <li><code>substring</code>: <i></i> um valor <code>text</code> que representa a subcadeia a procurar em <code>substring</code></li>        <li><code>comparer</code>: <i>[Opcional]</i> um <code>Comparer</code> utilizado para controlar a comparação. Por exemplo, <code>Comparer.OrdinalIgnoreCase</code> pode ser utilizado para efetuar pesquisas não sensíveis a maiúsculas/minúsculas</li>      </ul>      <div>         <code>comparer</code>é um <code>Comparer</code> utilizado para controlar a comparação. Os comparadores podem ser utilizados para fornecer comparações não sensíveis a maiúsculas/minúsculas ou baseadas na cultura e região.      </div>      <div>        Os comparadores incorporados que se seguem estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: utilizado para executar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: utilizado para executar uma comparação ordinal exata não sensível a maiúsculas/minúsculas</li>        <li> <code>Comparer.FromCulture</code>: utilizado para executar uma comparação baseada na cultura</li>      </ul>


## Examples

### Example #1 
Verificar se o texto &#34;Olá, Mundo&#34; começa com o texto &#34;olá&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Verificar se o texto &#34;Olá, Mundo&#34; começa com o texto &#34;Olá&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
