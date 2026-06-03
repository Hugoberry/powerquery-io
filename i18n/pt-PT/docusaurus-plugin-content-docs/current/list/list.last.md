---
title: List.Last
---

# List.Last


Devolve o último valor da lista ou a predefinição especificada se a lista estiver vazia.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o último item na lista especificada ou o valor predefinido opcional se a lista estiver vazia.

-   `list`: A lista a examinar.
-   `defaultValue`: (Opcional) O valor predefinido a devolver se a lista estiver vazia. Se a lista estiver vazia e não for especificado um valor predefinido, a função devolve `null`.


## Examples

### Example #1
Determinar o último valor na lista \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Determinar o último valor na lista \{\} ou -1 se a lista estiver vazia.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
