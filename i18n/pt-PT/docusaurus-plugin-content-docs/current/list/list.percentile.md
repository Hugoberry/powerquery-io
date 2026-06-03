---
title: List.Percentile
---

# List.Percentile


Devolve um ou mais percentis de exemplo correspondentes às probabilidades indicadas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Devolve um ou mais percentis de amostra da lista `list`. Se o valor `percentiles` for um número entre 0.0 e 1.0, será tratado como um percentil e o resultado será um único valor correspondente a essa probabilidade. Se o valor `percentiles` for uma lista de números com valores entre 0.0 e 1.0, o resultado será uma lista de percentis correspondentes à probabilidade de entrada.  
  
A opção PercentileMode em `options` pode ser utilizada por utilizadores avançados para escolher um método de interpolação mais específico, mas não é recomendada para a maioria das utilizações. Os símbolos predefinidos `PercentileMode.ExcelInc` e `PercentileMode.ExcelExc` correspondem aos métodos de interpolação utilizados pelas funções do Excel `PERCENTILE.INC` e `PERCENTILE.EXC`. O comportamento predefinido corresponde a `PercentileMode.ExcelInc`. Os símbolos `PercentileMode.SqlCont` e `PercentileMode.SqlDisc` correspondem, respetivamente, ao comportamento do SQL Server para `PERCENTILE_CONT` e `PERCENTILE_DISC`.


## Examples

### Example #1
Encontre o primeiro quartil da lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Encontre os quartis da lista `{5, 3, 1, 7, 9}` com um método de interpolação que corresponda ao `PERCENTILE.EXC` do Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
