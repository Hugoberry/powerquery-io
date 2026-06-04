---
title: List.First
---

# List.First


Devolve o primeiro valor da lista ou o valor predefinido especificado se está baleiro.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Devolve o primeiro elemento da lista `list` ou o valor predefinido opcional, `defaultValue`, se a lista está baleira. Se a lista está baleira e non se especifica ningún valor predefinido, a función devolve `null`.


## Examples

### Example #1
Buscar o primeiro valor da lista \{1, 2, 3\}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Buscar o primeiro valor da lista \{\}. Se a lista está baleira, devolve -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
