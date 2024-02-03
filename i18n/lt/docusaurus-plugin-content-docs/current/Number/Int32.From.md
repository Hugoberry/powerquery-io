---
title: Int32.From
---

# Int32.From


## Description

Iš nurodytos reikšmės sukuriamas 32 bitų sveikasis skaičius.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Pateikiama 32 bitų sveikoji <code>number</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Int32.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code> 32 bitų sveikųjų skaičių diapazone be trupmeninės dalies, pateikiama <code>value</code>. Jei yra trupmeninė dalis, skaičius suapvalinamas nurodytu apvalinimo režimu. Numatytasis apvalinimo režimas yra <code>RoundingMode.ToEven</code>. Jei <code>value</code> reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.FromText</code>. Norėdami sužinoti apie naudojamus apvalinimo režimus žr. <code>Number.Round</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite 32 bitų sveikąją &lt;code&gt;number&lt;/code&gt; reikšmę iš &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Gaukite 32 bitų sveikąją &lt;code&gt;number&lt;/code&gt; reikšmę iš &lt;code&gt;&#34;4.5&#34;&lt;/code&gt; naudodami &lt;code&gt;RoundingMode.AwayFromZero&lt;/code&gt;.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
