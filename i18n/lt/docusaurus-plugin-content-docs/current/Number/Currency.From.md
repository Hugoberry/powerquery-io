---
title: Currency.From
---

# Currency.From


## Description

Pateikia valiutos reikšmę nuo duotos reikšmės.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Pateikiama <code>currency</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Currency.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code>, valiutos diapazone, pateikiama <code>value</code>, kurios trupmeninė dalis suapvalinama iki 4 skaitmenų po kablelio. Jei <code>value</code> reikšmė yra bet kokio kito tipo, ji pirmiausia bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.FromText</code>. Tinkamas valiutos diapazonas yra nuo <code>-922,337,203,685,477.5808</code> iki <code>922,337,203,685,477.5807</code>. Galimus apvalinimo režimus žr. <code>Number.Round</code>. Numatytasis yra <code>RoundingMode.ToEven</code>. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite &lt;code&gt;&#34;1,23455&#34;&lt;/code&gt; reikšmę &lt;code&gt;currency&lt;/code&gt;.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2 
Gaukite &lt;code&gt;currency&lt;/code&gt; reikšmę pagal &lt;code&gt;&#34;1.23455&#34;&lt;/code&gt; naudodami &lt;code&gt;RoundingMode.Down&lt;/code&gt;.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
