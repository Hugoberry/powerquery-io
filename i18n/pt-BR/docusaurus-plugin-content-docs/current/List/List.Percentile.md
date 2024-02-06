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

Retorna um ou mais percentis de amostra da lista <code>list</code>. Se o valor <code>percentiles</code> for um número entre 0,0 e 1,0, ele será tratado como um percentil e o resultado será    um valor correspondente a essa probabilidade. Se o valor <code>percentiles</code> for uma lista de números com valores entre 0,0 e 1,0, o resultado será uma lista de percentis    correspondentes à probabilidade de entrada. A opção PercentileMode no <code>options</code> pode ser usada por usuários avançados para escolher um método de interpolação mais específico, mas não é recomendada para a maioria dos tipos de uso.    Os símbolos predefinidos <code>PercentileMode.ExcelInc</code> e <code>PercentileMode.ExcelExc</code> correspondem aos métodos de interpolação usados pelas funções do Excel    <code>PERCENTILE.INC</code> e <code>PERCENTILE.EXC</code>. O comportamento padrão corresponde a <code>PercentileMode.ExcelInc</code>. Os símbolos    <code>PercentileMode.SqlCont</code> e <code>PercentileMode.SqlDisc</code> correspondem ao comportamento do SQL Server para <code>PERCENTILE_CONT</code> e    <code>PERCENTILE_DISC</code>, respectivamente.  


## Examples

### Example #1 
Localize o primeiro quartil da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Localize os quartis da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; usando um método de interpolação correspondente ao &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; do Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
