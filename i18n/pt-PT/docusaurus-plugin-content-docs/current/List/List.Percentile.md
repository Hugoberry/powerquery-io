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

Devolve um ou mais percentis de exemplo da lista <code>list</code>. Se o valor <code>percentiles</code> for um número entre 0,0 e 1,0, este será tratado como um percentil e o resultado será    um único valor correspondente a essa probabilidade. Se o valor <code>percentiles</code> for uma lista de números com valores entre 0,0 e 1,0, o resultado será uma lista de percentis    correspondente à probabilidade de entrada. A opção PercentileMode em <code>options</code> pode ser utilizada por utilizadores avançados para escolher um método de interpolação mais específico, mas não é recomendada para a maioria das utilizações.    Os símbolos predefinidos <code>PercentileMode.ExcelInc</code> e <code>PercentileMode.ExcelExc</code> correspondem aos métodos de interpolação utilizados pelas funções do Excel    <code>PERCENTIL.INC</code> e <code>PERCENTILE.EXC</code>. O comportamento predefinido corresponde ao <code>PercentileMode.ExcelInc</code>. Os símbolos    <code>PercentileMode.SqlCont</code> e <code>PercentileMode.SqlDisc</code> correspondem ao comportamento do SQL Server para <code>PERCENTILE_CONT</code> e    <code>PERCENTILE_DISC</code>, respetivamente.  


## Examples

### Example #1 
Encontre o primeiro quartil da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Encontre os quartis da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; com um método de interpolação que corresponda ao &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; do Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
