---
title: List.First
---

# List.First


## Description

Retorna o primeiro valor da lista ou o valor padrão especificado, caso ela esteja vazia.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Retorna o primeiro item da lista <code>list</code> ou o valor padrão <code>defaultValue</code> opcional, se a lista estiver vazia.    Se a lista estiver vazia e um valor padrão não for especificado, a função retornará <code>null</code>.


## Examples

### Example #1 
Localize o primeiro valor da lista \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Localize o primeiro valor da lista \{}. Se a lista estiver vazia, retorne -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
