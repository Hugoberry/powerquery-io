---
title: List.Mode
---

# List.Mode


## Description

Returnerer den hyppigste værdi på listen.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Returnerer det element, der vises mest hyppigt på listen, <code>list</code>. Hvis listen er tom, udløses der en undtagelse. Hvis der vises flere elementer med samme maksimumhyppighed, vælges den sidste.    Du kan angive en valgfri værdi af typen <code>comparisonCriteria</code>, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Find det element, der vises mest hyppigt på listen, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Find det element, der vises mest hyppigt på listen, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
