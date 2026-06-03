---
title: Text.Range
---

# Text.Range


Retorna a subcadeia de caracteres encontrada no deslocamento.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Retorna a substring do texto `text` encontrada no deslocamento `offset`. Um parâmetro opcional, `count`, pode ser incluído para especificar quantos caracteres retornar. Gera um erro se não houver caracteres suficientes.


## Examples

### Example #1
Localize a subcadeia de caracteres no texto "Olá, Mundo", começando no índice. 6.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
Localize a subcadeia de caracteres no texto "Olá, Mundo, Olá", começando no índice 6 e abrangendo 5 caracteres.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
