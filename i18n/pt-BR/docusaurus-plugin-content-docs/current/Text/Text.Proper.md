---
title: Text.Proper
---

# Text.Proper


## Description

Coloque a primeira letra de cada palavra em maiúscula.


## Syntax

```powerquery
Text.Proper(
    text as text,
    optional culture as text
) as text
```


## Details

Retorna o resultado do uso de maiúsculas somente da primeira letra de cada palavra no valor de texto <code>text</code>. Todas as outras letras são retornadas em minúsculas. Um <code>culture</code> opcional também pode ser fornecido (por exemplo, "en-US").


## Examples

### Example #1 
Use &lt;code&gt;Text.Proper&lt;/code&gt; em uma frase simples.
```powerquery
Text.Proper("the QUICK BrOWn fOx jUmPs oVER tHe LAzy DoG")
```

Result: 
```powerquery
"The Quick Brown Fox Jumps Over The Lazy Dog"
```




## Category
Text.Transformations
