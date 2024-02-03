---
title: List.Mode
---

# List.Mode


## Description

Vrne najpogostejšo vrednost na seznamu.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Vrne element, ki je najpogosteje prikazan na seznamu, <code>list</code>. Če je seznam prazen, pride do izjeme. Če je prikazanih več elementov z enako največjo pogostostjo, je izbran zadnji element.    Določite lahko izbirno vrednost <code>comparisonCriteria</code>, <code>equationCriteria</code>, za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Poiščite element, ki je najpogosteje prikazan na seznamu &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Poiščite element, ki je najpogosteje prikazan na seznamu &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
