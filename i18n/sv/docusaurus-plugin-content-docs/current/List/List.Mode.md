---
title: List.Mode
---

# List.Mode


## Description

Returnerar det vanligast förekommande värdet i listan.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Returnerar objektet som förekommer oftast i listan, <code>list</code>. Om listan är tom genereras ett undantag. Om flera objekt förekommer med samma maxfrekvens väljs det sista.    Ett valfritt <code>comparisonCriteria</code>-värde, <code>equationCriteria</code>, kan anges för att hantera likhetstestning. 


## Examples

### Example #1 
Hitta det objekt som förekommer oftast i listan, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Hitta det objekt som förekommer oftast i listan, &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
