---
title: List.Average
---

# List.Average


## Description

Devolve a media dos valores. Funciona con valores de número, data, data e hora, data, hora e fuso e duración.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Devolve o valor da media dos elementos da lista, <code>list</code>. O resultado fornécese no mesmo tipo de datos que os valores da lista. Só funciona con valores de número, data, hora, data e hora, data, hora e fuso e duración.    Se a lista está baleira devólvese nulo.


## Examples

### Example #1 
Buscar a media da lista de números, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Buscar a media dos valores de data 1 de xaneiro de 2011, 2 de xaneiro de 2011 e 3 de xaneiro de 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
