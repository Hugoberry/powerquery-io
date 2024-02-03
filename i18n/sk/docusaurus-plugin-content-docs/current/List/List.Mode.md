---
title: List.Mode
---

# List.Mode


## Description

Vráti najčastejšie sa vyskytujúcu hodnotu v zozname.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

Vráti položku, ktorá sa najčastejšie vyskytuje v zozname <code>list</code>. Ak je zoznam prázdny, dôjde k výnimke. Ak sa viacero položiek vyskytuje s rovnakou maximálnou frekvenciou, vyberie sa posledná položka.    Možno zadať voliteľnú hodnotu <code>comparisonCriteria</code>, <code>equationCriteria</code>, na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Nájdite položku, ktorá sa najčastejšie vyskytuje v zozname &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Nájdite položku, ktorá sa najčastejšie vyskytuje v zozname &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
