---
title: List.Percentile
---

# List.Percentile


Retourne un ou plusieurs centiles d’échantillonnage correspondant aux probabilités spécifiées.


## Syntax

```powerquery
List.Percentile(
    list as list,
    percentiles as any,
    optional options as record
) as any
```


## Remarks

Retourne un ou plusieurs centiles d’échantillon de la liste <code>list</code>. Si la valeur <code>percentiles</code> est un nombre compris entre 0,0 et 1,0, elle est traitée en tant que centile et le résultat est    une valeur unique correspondant à cette probabilité. Si la valeur <code>percentiles</code> est une liste de nombres avec des valeurs comprises entre 0,0 et 1,0, le résultat est une liste de centiles    correspondant à la probabilité d’entrée. L’option PercentileMode dans <code>options</code> peut être utilisée par les utilisateurs avancés pour choisir une méthode d’interpolation plus spécifique, mais n’est pas recommandée pour la plupart des utilisations.    Les symboles prédéfinis <code>PercentileMode.ExcelInc</code> et <code>PercentileMode.ExcelExc</code> correspondent aux méthodes d’interpolation utilisées par les fonctions Excel    <code>CENTILE.INC</code> et <code>CENTILE.EXC</code>. Le comportement par défaut correspond à <code></code> PercentileMode.ExcelInc. Les symboles    <code>PercentileMode.SqlCont</code> et <code>PercentileMode.SqlDisc</code> correspondent au comportement de SQL Server pour <code>PERCENTILE_CONT</code> et    <code>PERCENTILE_DISC</code>, respectivement.  


## Examples

### Example #1 
Recherchez le premier quartile de la liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, 0.25)
```

Result: 
```powerquery
3
```


### Example #2 
Recherche les quartiles de la liste &lt;code&gt; \{5, 3, 1, 7, 9} &lt;/code&gt; à l’aide d’une méthode d’interpolation correspondant à la fonction &lt;code&gt;PERCENTILE.EXC&lt;/code&gt; d’Excel.
```powerquery
List.Percentile({5, 3, 1, 7, 9}, {0.25, 0.5, 0.75}, [PercentileMode=PercentileMode.ExcelExc])
```

Result: 
```powerquery
{2, 5, 8}
```




## Category
List.Ordering
