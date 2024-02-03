---
title: List.Mode
---

# List.Mode


## Description

A lista leggyakoribb értéket adja vissza.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Details

A <code>list</code> listán leggyakrabban szereplő elemet adja vissza. A függvény kivételt vált ki, ha a lista üres. Ha több elem szerepel ugyanazzal a maximális gyakorisággal, a függvény az utolsót választja közülük.    Megadható egy nem kötelező <code>equationCriteria</code> <code>comparisonCriteria</code> érték is az egyenlőségvizsgálat szabályozásához. 


## Examples

### Example #1 
Az &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5}&lt;/code&gt; listán leggyakrabban szereplő elem megkeresése
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2 
Az &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; listán leggyakrabban szereplő elem megkeresése
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
