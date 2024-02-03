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

Retorna true se o valor do texto <code>text</code> começar com o valor do texto <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Um valor <code>text</code> que deve ser pesquisado</li>        <li><code>substring</code>: <i></i> Um valor <code>text</code> que é a substring a ser pesquisada em <code>substring</code></li>        <li><code>comparer</code>: <i>[Optional]</i> Um <code>Comparer</code> usado para controlar a comparação. Por exemplo, <code>Comparer.OrdinalIgnoreCase</code> pode ser usado para realizar pesquisas sem diferenciar maiúsculas de minúsculas</li>      </ul>      <div>        <code>comparer</code> é um <code>Comparer</code> que é usado para controlar a comparação. Os comparadores podem ser usados ​​para realizar comparações sem diferenciar maiúsculas de minúsculas ou com reconhecimento de cultura e localidade.      </div>      <div>        Os seguintes comparadores internos estão disponíveis na linguagem da fórmula:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: usado para realizar uma comparação ordinal exata</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: usado para realizar uma comparação ordinal exata sem diferenciar maiúsculas de minúsculas</li>        <li> <code>Comparer.FromCulture</code>: usado para realizar uma comparação com reconhecimento de culturati</li>      </ul>


## Examples

### Example #1 
Verifique se o texto &#34;Olá, Mundo&#34; começa com o texto &#34;olá&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Verifique se o texto &#34;Olá, Mundo&#34; começa com o texto &#34;Olá&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
