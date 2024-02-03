---
title: Single.From
---

# Single.From


## Description

Iš nurodytos reikšmės sukuriamas paprastojo tikslumo skaičius.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Pateikiama viengubo tikslumo <code>number</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Single.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code> viengubo tikslumo skaičių diapazone, pateikiama <code>value</code>; kitu atveju pateikiama klaida. Jei <code>value</code> reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.FromText</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite paprastojo tikslumo &lt;code&gt;number&lt;/code&gt; reikšmę iš &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
