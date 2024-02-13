---
title: Text.RemoveRange
---

# Text.RemoveRange


Remove uma contagem de caracteres começando no deslocamento especificado


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retorna uma cópia do valor de texto <code>text</code> com todos os caracteres na posição <code>offset</code> removida.    Um parâmetro <code>count</code> opcional pode ser usado para especificar o número de caracteres a serem removidos. O valor padrão de <code>count</code> é 1. Os valores de posição começam em 0.


## Examples

### Example #1 
Remova um caractere do valor de texto &#34;ABEFC&#34; na posição 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Remova dois caracteres do valor de texto &#34;ABEFC&#34; começando na posição 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
