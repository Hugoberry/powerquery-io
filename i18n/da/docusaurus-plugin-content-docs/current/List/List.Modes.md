---
title: List.Modes
---

# List.Modes


Returnerer en liste over de hyppigste værdier på listen.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerer det element, der vises mest hyppigt på listen, <code>list</code>. Hvis listen er tom, udløses der en undtagelse. Hvis der vises flere elementer med samme maksimumhyppighed, vælges den sidste.    Du kan angive en valgfri værdi af typen <code>comparisonCriteria</code>, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Find de elementer, der vises mest hyppigt på listen, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
