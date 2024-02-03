---
title: List.Percentile
---

# List.Percentile


## Description

Retorna un o més percentils de mostra corresponents a les probabilitats especificades.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Details

Retorna un o més percentils de mostra de la llista <code>list</code>. Si el valor <code>percentiles</code> és un número entre 0.0 i 1.0, es considerarà que és un percentil i el resultat serà    un valor únic que correspondrà a aquesta probabilitat. Si el valor <code>percentiles</code> és una llista de nombres amb valors entre 0.0 i 1.0, el resultat serà una llista de percentils    que correspondrà a la probabilitat d'entrada. Els usuaris avançats poden utilitzar l'opció PercentileMode inclosa a <code>options</code> per triar un mètode d'interpolació més específic, però aquesta opció no es recomana per a la majoria d'usos.    Els símbols predefinits <code>PercentileMode.ExcelInc</code> i <code>PercentileMode.ExcelExc</code> coincideixen amb els mètodes d'interpolació que utilitzen les funcions de l'Excel    <code>PERCENTILE.INC</code> i <code>PERCENTILE.EXC</code>. El comportament per defecte coincideix amb <code>PercentileMode.ExcelInc</code>. Els símbols    <code>PercentileMode.SqlCont</code> i <code>PercentileMode.SqlDisc</code> coincideixen amb el comportament de l'SQL Server per a <code>PERCENTILE_CONT</code> i    <code>PERCENTILE_DISC</code>, respectivament.  


## Examples

### Example #1 
Trobeu el primer quartil de la llista &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Trobeu els quartils de la llista &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; amb un mètode d&#39;interpolació que coincideixi amb la funció &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; de l&#39;Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
