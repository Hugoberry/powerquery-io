---
title: List.Modes
---

# List.Modes


## Description

Vrátí seznam nejčastěji se vyskytujících hodnot v seznamu.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Vrátí nejčastěji se vyskytující položku v seznamu <code>list</code>. Pokud je seznam prázdný, je vyvolána výjimka. Pokud seznam obsahuje více položek se stejným nejvyšším výskytem, je vybrána poslední z nich.    Lze zadat volitelnou hodnotu <code>comparisonCriteria</code> <code>equationCriteria</code>, která ovládá testování rovnosti. 


## Examples

### Example #1 
Vyhledá nejčastěji se vyskytující položky v seznamu &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
