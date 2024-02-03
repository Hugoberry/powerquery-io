---
title: List.Modes
---

# List.Modes


## Description

Vráti zoznam najčastejšie sa vyskytujúcich hodnôt v zozname.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vráti položku, ktorá sa najčastejšie vyskytuje v zozname <code>list</code>. Ak je zoznam prázdny, dôjde k výnimke. Ak sa viacero položiek vyskytuje s rovnakou maximálnou frekvenciou, vyberie sa posledná položka.    Možno zadať voliteľnú hodnotu <code>comparisonCriteria</code>, <code>equationCriteria</code>, na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Nájdite položky, ktoré sa najčastejšie vyskytujú v zozname &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
