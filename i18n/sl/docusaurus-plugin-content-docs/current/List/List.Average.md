---
title: List.Average
---

# List.Average


## Description

Vrne povprečje vrednosti. Deluje z vrednostmi &#34;number&#34;, &#34;date&#34;, &#34;datetime&#34;, &#34;datetimezone&#34; in &#34;duration&#34;.


## Syntax

```powerquery
List.Average(
    list as list,
    optional precision as Precision.Type
) as any
```


## Details

Vrne povprečno vrednost za elemente na seznamu, <code>list</code>. Rezultat je prikazan v enaki vrsti podatkov kot vrednosti na seznamu. Deluje le z vrednostmi "number", "date", "time", "datetime", "datetimezone" in "duration".    Če je seznam prazen, je vrnjena vrednost "null".


## Examples

### Example #1 
Poiščite povprečje seznama števil, &lt;code&gt;\{3, 4, 6}&lt;/code&gt;.
```powerquery
List.Average({3, 4, 6})
```

Result: 
```powerquery
4.333333333333333
```


### Example #2 
Poiščite povprečje datumskih vrednosti 1. januar 2011, 2. januar 2011 in 3. januar 2011.
```powerquery
List.Average({#date(2011, 1, 1), #date(2011, 1, 2), #date(2011, 1, 3)})
```

Result: 
```powerquery
#date(2011, 1, 2)
```




## Category
List.Averages
