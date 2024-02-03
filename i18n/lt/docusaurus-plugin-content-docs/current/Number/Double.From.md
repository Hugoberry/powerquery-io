---
title: Double.From
---

# Double.From


## Description

Iš nurodytos reikšmės sukuriamas dvigubo tikslumo skaičius.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Pateikiama dvigubo tikslumo <code>number</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Double.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code> dvigubo tikslumo skaičių diapazone, pateikiama <code>value</code>; kitu atveju pateikiama klaida. Jei <code>value</code> reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.FromText</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite dvigubo tikslumo &lt;code&gt;number&lt;/code&gt; reikšmę iš &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
