---
title: Number.FromText
---

# Number.FromText


## Description

Sukuriami skaičiai iš įprasto teksto formatų („15“, „3,423.10“, „5.0E-10“).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Pateikiama <code>number</code> reikšmė iš nurodytos tekstinės <code>text</code> reikšmės. <ul>  <li><code>text</code>: tekstinė skaičiaus reikšmės pateiktis. Pateiktis turi būti įprasto skaičių formato, pvz., „15“, „3,423.10“ arba „5.0E-10“.</li>  <li><code>culture</code>: pasirinktinė kultūra, kuria valdoma, kaip aiškinamas <code>text</code> (pvz., „en-US“).</li> </ul>


## Examples

### Example #1 
Gaukite &lt;code&gt;&#34;4&#34;&lt;/code&gt; skaičiaus reikšmę.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Gaukite &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt; skaičiaus reikšmę.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
