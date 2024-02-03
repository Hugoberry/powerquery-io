---
title: List.Percentile
---

# List.Percentile


## Description

Devuelve uno o más percentiles de muestra correspondientes a las probabilidades especificadas.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Devuelve uno o más percentiles de muestra de la lista <code>list</code>. Si el valor <code>percentiles</code> es un número entre 0,0 y 1,0, se tratará como percentil, y el resultado será    un valor único correspondiente a esa probabilidad. Si el valor <code>percentiles</code> es una lista de números con valores entre 0,0 y 1,0, el resultado será una lista de percentiles    correspondiente a la probabilidad de entrada. Los usuarios avanzados pueden usar la opción PercentileMode en <code>options</code> para elegir un método de interpolación más específico, pero no se recomienda para la mayoría de los usos.    Los símbolos predefinidos <code>PercentileMode. ExcelInc</code> y <code>PercentileMode. ExcelExc</code> coinciden con los métodos de interpolación utilizados por las funciones de Excel    <code>PERCENTILE.INC</code> y <code>PERCENTILE.EXC</code>. El comportamiento predeterminado coincide con <code>PercentileMode.ExcelInc</code>. Los símbolos    <code>PercentileMode.SqlCont</code> y <code>PercentileMode.SqlDisc</code> coinciden con el comportamiento de SQL Server para <code>PERCENTILE_CONT</code> y    <code>PERCENTILE_DISC</code> respectivamente.  


## Examples

### Example #1 
Encuentre el primer cuartil de la lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Encuentre los cuartiles de la lista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; usando un método de interpolación que coincida con &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; de Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
