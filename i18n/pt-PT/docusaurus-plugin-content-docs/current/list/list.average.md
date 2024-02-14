---
title: List.Average
---

# List.Average


Devolve a média dos valores. Funciona com valores numéricos, de data, datetime, datetimezone e duração.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Devolve o valor médio dos itens existentes na lista. <code>list</code>. O resultado é especificado no mesmo tipo de dados dos valores existentes na lista. Só funciona com valores numéricos, de data, hora, datetime, datetimezone e duração.    Se a lista estiver vazia será devolvido um nulo.


## Examples

### Example #1 
Determinar a média da lista de números, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Determinar a média dos valores de data 1 de janeiro de 2011, 2 de janeiro de 2011 e 3 de janeiro de 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
