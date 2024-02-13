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

Retorna a porção de <code>text</code> entre <code>startDelimiter</code> e <code>endDelimiter</code> especificados.    Um valor numérico opcional <code>startIndex</code> indica qual ocorrência do <code>startDelimiter</code> deve ser considerada.    Uma lista opcional <code>startIndex</code> indica a ocorrência do <code>startDelimiter</code> que deve ser considerada, assim como se a indexação deve ser feita a partir do início ou do final da entrada.    O <code>endIndex</code> é semelhante, exceto pelo fato que é realizada indexação relativa ao <code>startIndex</code>.


## Examples

### Example #1 
Obtenha a porção de &#34;111 (222) 333 (444)&#34; entre o (primeiro) parêntese de abertura e o (primeiro) parêntese de fechamento que o segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Obtenha a porção de &#34;111 (222) 333 (444)&#34; entre o segundo parêntese de abertura e o primeiro parêntese de fechamento que o segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Obtenha a porção de &#34;111 (222) 333 (444)&#34; entre o segundo parêntese de abertura do final e o segundo parêntese de fechamento que o segue.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
