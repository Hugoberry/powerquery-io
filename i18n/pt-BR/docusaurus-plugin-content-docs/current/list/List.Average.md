---
title: List.Average
---

# List.Average


Retorna a média dos valores. Funciona com valores number, date, datetime, datetimezone e duration.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Retorna o valor médio dos itens na lista, <code>list</code>. O resultado é especificado no mesmo tipo de dados dos valores na lista. Funciona somente com valores number, date, time, datetime, datetimezone e duration.    Se a lista estiver vazia, um valor nulo será retornado.


## Examples

### Example #1 
Localize a média de lista de números, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Localize a média dos valores date 1º de janeiro de 2011, 2 de janeiro de 2011 e 3 de janeiro de 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
