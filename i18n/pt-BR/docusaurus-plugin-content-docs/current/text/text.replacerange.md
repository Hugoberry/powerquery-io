---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Remove um intervalo de caracteres e insere um valor em uma posição especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Retorna o resultado da remoção de um número de caracteres, <code>count</code>, do valor de texto <code>text</code> começando na posição <code>offset</code> e inserindo o valor de texto <code>newText</code> na mesma posição em <code>text</code>.


## Examples

### Example #1 
Substitua um único caractere na posição 2 do valor de texto &#34;ABGF&#34; pelo novo valor de texto &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
