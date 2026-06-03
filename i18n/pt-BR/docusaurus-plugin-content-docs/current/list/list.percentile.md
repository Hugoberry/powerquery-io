---
title: List.Percentile
---

# List.Percentile


Retorna um ou mais percentis de amostra correspondentes às probabilidades fornecidas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Retorna um ou mais percentis de amostra da lista `list`. Se o valor `percentiles` for um número entre 0,0 e 1,0, ele será tratado como um percentil e o resultado será um valor correspondente a essa probabilidade. Se o valor `percentiles` for uma lista de números com valores entre 0,0 e 1,0, o resultado será uma lista de percentis correspondentes à probabilidade de entrada.  
  
A opção PercentileMode no `options` pode ser usada por usuários avançados para escolher um método de interpolação mais específico, mas não é recomendada para a maioria dos tipos de uso. Os símbolos predefinidos `PercentileMode.ExcelInc` e `PercentileMode.ExcelExc` correspondem aos métodos de interpolação usados pelas funções do Excel `PERCENTILE.INC` e `PERCENTILE.EXC`. O comportamento padrão corresponde a `PercentileMode.ExcelInc`. Os símbolos `PercentileMode.SqlCont` e `PercentileMode.SqlDisc` correspondem ao comportamento do SQL Server para `PERCENTILE_CONT` e `PERCENTILE_DISC`, respectivamente.


## Examples

### Example #1
Localize o primeiro quartil da lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Localize os quartis da lista `{5, 3, 1, 7, 9}` usando um método de interpolação correspondente ao `PERCENTILE.EXC` do Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
