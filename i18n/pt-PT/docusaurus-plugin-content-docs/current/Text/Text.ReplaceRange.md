---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Remove um intervalo de carateres e insere um valor novo na posição especificada.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Devolve o resultado da remoção de um número de carateres, <code>count</code>, do valor de texto <code>text</code> começando na posição <code>offset</code> e, em seguida, inserindo o valor de texto <code>newText</code> na mesma posição em <code>text</code>.


## Examples

### Example #1 
Substituir um caráter na posição 2 no valor de texto &#34;ABGF&#34; pelo novo valor de texto &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
