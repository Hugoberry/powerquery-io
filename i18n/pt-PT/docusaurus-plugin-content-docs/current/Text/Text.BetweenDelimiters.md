---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Devolve a parte de <code>text</code> entre o <code>startDelimiter</code> e <code>endDelimiter</code> especificados.    Um valor numérico opcional <code>startIndex</code> indica qual a ocorrência de <code>startDelimiter</code> que deve ser considerada.    Uma lista opcional <code>startIndex</code> indica qual a ocorrência de <code>startDelimiter</code> que deve ser considerada, bem como se a indexação deve ser feita a partir do início ou do fim da entrada.    O <code>endIndex</code> é semelhante, com a exceção de que a indexação é feita relativamente a <code>startIndex</code>.


## Examples

### Example #1 
Obtenha a parte de &#34;111 (222) 333 (444)&#34; entre o (primeiro) parêntese aberto e o (primeiro) parêntese fechado que o sucede.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Obtenha a parte de &#34;111 (222) 333 (444)&#34; entre o segundo parêntese aberto e o primeiro parêntese fechado que o sucede.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Obtenha a parte de &#34;111 (222) 333 (444)&#34; entre o segundo parêntese aberto a partir do fim e o segundo parêntese fechado que o sucede.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
