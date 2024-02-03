---
title: Decimal.From
---

# Decimal.From


## Description

Iš nurodytos reikšmės sukuriama dešimtainė trupmena.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Pateikiama dešimtainė <code>number</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Decimal.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code> dešimtainių skaičių diapazone, pateikiama <code>value</code>; kitu atveju pateikiama klaida. Jei <code>value</code> reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.FromText</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite dešimtainę &lt;code&gt;number&lt;/code&gt; reikšmę iš &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
