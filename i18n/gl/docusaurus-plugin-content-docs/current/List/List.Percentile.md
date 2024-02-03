---
title: List.Percentile
---

# List.Percentile


## Description

Devolve un ou máis exemplos de percentís correspondentes ás probabilidades indicadas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Devolve un ou máis exemplos de percentís da lista <code>list</code>. Se o valor <code>percentiles</code> é un número entre 0,0 e 1,0, tratarase como un percentil e o resultado será    un valor único correspondente a esa probabilidade. Se o valor <code>percentiles</code> é unha lista de números con valores entre 0,0 e 1,0, o resultado será unha lista de percentís    correspondente á probabilidade de entrada. Os usuarios avanzados poden usar a opción PercentileMode de <code>options</code> para escoller un método de interpolación máis específico, pero non se recomenda na maioría dos casos.    Os símbolos predefinidos <code>PercentileMode.ExcelInc</code> e <code>PercentileMode.ExcelExc</code> coinciden cos métodos de interpolación usados polas funcións de Excel    <code>PERCENTILE.INC</code> e <code>PERCENTILE.EXC</code>. O comportamento predefinido coincide con <code>PercentileMode.ExcelInc</code>. Os símbolos    <code>PercentileMode.SqlCont</code> e <code>PercentileMode.SqlDisc</code> coinciden co comportamento de SQL Server para <code>PERCENTILE_CONT</code> e    <code>PERCENTILE_DISC</code>, respectivamente.  


## Examples

### Example #1 
Busque o primeiro cuartil da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Busque os cuartís da lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; mediante un método de interpolación que coincida co &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; de Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
