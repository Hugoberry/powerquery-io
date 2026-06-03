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

Restituisce uno o più percentili del campione dell'elenco `list`. Se il valore `percentiles` è un numero compreso tra 0,0 e 1,0, verrà considerato come un percentile e il risultato sarà un unico valore corrispondente a tale probabilità. Se il valore `percentiles` è un elenco di numeri con valori compresi tra 0,0 e 1,0, il risultato sarà un elenco di percentili corrispondenti alla probabilità di input.  
  
L'opzione PercentileMode in `options` può essere usata dagli utenti avanzati per scegliere un metodo di interpolazione più specifico, ma è sconsigliata per la maggior parte degli utilizzi. I simboli predefiniti `PercentileMode.ExcelInc` e `PercentileMode.ExcelExc` corrispondono ai metodi di interpolazione usati dalle funzioni Excel `PERCENTILE.INC` e `PERCENTILE.EXC`. Il comportamento predefinito corrisponde a `PercentileMode.ExcelInc`. I simboli `PercentileMode.SqlCont` e `PercentileMode.SqlDisc` corrispondono al comportamento di SQL Server per `PERCENTILE_CONT` e `PERCENTILE_DISC`, rispettivamente.


## Examples

### Example #1
Trovare il primo quartile dell'elenco `{5, 3, 1, 7, 9}`.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2
Trovare i quartili dell'elenco `{5, 3, 1, 7, 9}` usando un metodo di interpolazione che corrisponde al metodo `PERCENTILE.EXC` di Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
