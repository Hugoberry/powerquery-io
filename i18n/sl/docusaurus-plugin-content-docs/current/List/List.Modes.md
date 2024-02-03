---
title: List.Modes
---

# List.Modes


## Description

Vrne seznam najpogostejših vrednosti na seznamu.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vrne element, ki je najpogosteje prikazan na seznamu, <code>list</code>. Če je seznam prazen, pride do izjeme. Če je prikazanih več elementov z enako največjo pogostostjo, je izbran zadnji element.    Določite lahko izbirno vrednost <code>comparisonCriteria</code>, <code>equationCriteria</code>, za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Poiščite elemente, ki so najpogosteje prikazani na seznamu &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
