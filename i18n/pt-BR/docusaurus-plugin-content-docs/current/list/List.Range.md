---
title: List.Range
---

# List.Range


Retorna um subconjunto da lista começando em um deslocamento.


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

Retorna um subconjunto da lista começando no deslocamento <code>list</code>. Um parâmetro opcional, <code>offset</code>, define o número máximo de itens no subconjunto.


## Examples

### Example #1 
Localize o subconjunto começando no deslocamento 6 da lista de números de 1 a 10.
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
Localize o subconjunto de comprimento 2 no deslocamento 6, na lista de números de 1 a 10.
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
