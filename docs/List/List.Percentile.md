---
title: List.Percentile
---

# List.Percentile


Returns one or more sample percentiles corresponding to the given probabilities.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Returns one or more sample percentiles of the list <code>list</code>. If the value <code>percentiles</code> is a number between 0.0 and 1.0, it will be treated as a percentile and the result will be    a single value corresponding to that probability. If the value <code>percentiles</code> is a list of numbers with values between 0.0 and 1.0, the result will be a list of percentiles    corresponding to the input probability. The PercentileMode option in <code>options</code> can be used by advanced users to pick a more-specific interpolation method but is not recommended for most uses.    Predefined symbols <code>PercentileMode.ExcelInc</code> and <code>PercentileMode.ExcelExc</code> match the interpolation methods used by the Excel functions    <code>PERCENTILE.INC</code> and <code>PERCENTILE.EXC</code>. The default behavior matches <code>PercentileMode.ExcelInc</code>. The symbols    <code>PercentileMode.SqlCont</code> and <code>PercentileMode.SqlDisc</code> match the SQL Server behavior for <code>PERCENTILE_CONT</code> and    <code>PERCENTILE_DISC</code>, respectively.  


## Examples

### Example #1 
Find the first quartile of the list &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Find the quartiles of the list &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; using an interpolation method matching Excel&#39;s &lt;code&gt;PERCENTILE.EXC&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
