---
title: List.Percentile
---

# List.Percentile


Restituisce uno o più percentili del campione corrispondenti alle probabilità specificate.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Restituisce uno o più percentili del campione dell'elenco <code>list</code>. Se il valore <code>percentiles</code> è un numero compreso tra 0,0 e 1,0, verrà considerato come un percentile e il risultato sarà    un unico valore corrispondente a tale probabilità. Se il valore <code>percentiles</code> è un elenco di numeri con valori compresi tra 0,0 e 1,0, il risultato sarà un elenco di percentili    corrispondenti alla probabilità di input. L'opzione PercentileMode in <code>options</code> può essere usata dagli utenti avanzati per scegliere un metodo di interpolazione più specifico, ma è sconsigliata per la maggior parte degli utilizzi.    I simboli predefiniti <code>PercentileMode.ExcelInc</code> e <code>PercentileMode.ExcelExc</code> corrispondono ai metodi di interpolazione usati dalle funzioni Excel    <code>PERCENTILE.INC</code> e <code>PERCENTILE.EXC</code>. Il comportamento predefinito corrisponde a <code>PercentileMode.ExcelInc</code>. I simboli    <code>PercentileMode.SqlCont</code> e <code>PercentileMode.SqlDisc</code> corrispondono al comportamento di SQL Server per <code>PERCENTILE_CONT</code> e    <code>PERCENTILE_DISC</code>, rispettivamente.


## Examples

### Example #1 
Trovare il primo quartile dell&#39;elenco &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Trovare i quartili dell&#39;elenco &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; usando un metodo di interpolazione che corrisponde al metodo &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; di Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
