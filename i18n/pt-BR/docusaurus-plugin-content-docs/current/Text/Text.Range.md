---
title: Text.Range
---

# Text.Range


## Description

Retorna a subcadeia de caracteres encontrada no deslocamento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Retorna a subcadeia de caracteres do texto <code>text</code> encontrada no deslocamento <code>offset</code>.    Um parâmetro <code>count</code> opcional pode ser incluído para especificar quantos caracteres serão retornados. Se não houver caracteres suficientes, será gerado um erro.


## Examples

### Example #1 
Localize a subcadeia de caracteres no texto &#34;Olá, Mundo&#34;, começando no índice. 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Localize a subcadeia de caracteres no texto &#34;Olá, Mundo, Olá&#34;, começando no índice 6 e abrangendo 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
