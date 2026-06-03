---
title: List.Last
---

# List.Last


Retorna o último valor da lista ou o valor padrão especificado, caso ela esteja vazia.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Retorna o último item na lista especificada ou o valor padrão opcional se a lista estiver vazia.

-   `list`: a lista a ser examinada.
-   `defaultValue`: (Opcional) O valor padrão a ser retornado se a lista estiver vazia. Se a lista estiver vazia e um valor padrão não for especificado, a função retornará `null`.


## Examples

### Example #1
Localize o último valor da lista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Localize o último valor da lista \{\} ou -1, se ela estiver vazia.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
