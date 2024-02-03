---
title: Number.From
---

# Number.From


## Description

Iš nurodytos reikšmės sukuriamas skaičius.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Pateikiama <code>number</code> reikšmė iš nurodytos <code>value</code> reikšmės. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Number.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>number</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>number</code> reikšmę:      <ul>        <li><code>text</code>: <code>number</code> reikšmė iš tekstinės pateikties. Apdorojami įprasto teksto formatai („15“, „3,423.10“, „5.0E-10“). Išsamios informacijos ieškokite <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 kaip <code>true</code>, 0 kaip <code>false</code>.</li>        <li><code>datetime</code>: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra OLE automatizavimo datos atitikmuo.</li>        <li><code>datetimezone</code>: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra <code>value</code> vietos datos ir laiko OLE automatizavimo datos atitikmuo.</li>        <li><code>date</code>: dvigubo tikslumo slankiojo kablelio skaičius, kuriame yra OLE automatizavimo datos atitikmuo.</li>        <li><code>time</code>: išreiškiama dienų trupmenomis.</li>        <li><code>duration</code>: išreiškiama visomis dienomis ir dienų trupmenomis.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Gaukite &lt;code&gt;&#34;4&#34;&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; reikšmę.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
Gaukite &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; reikšmę.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Gaukite &lt;code&gt;12.3%&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; reikšmę.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
