---
title: Duration.From
---

# Duration.From


## Description

Iš nurodytos reikšmės sukuriama trukmė.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Pateikiama <code>duration</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Duration.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>duration</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>duration</code> reikšmę:      <ul>        <li><code>text</code>: <code>duration</code> reikšmė iš tekstinių praėjusio laiko formų (d.h:m:s). Išsamiau žr. <code>Duration.FromText</code>.</li>        <li><code>number</code>: <code>value</code> sveikuoju arba trupmeniniu skaičiumi išreikštų dienų <code>duration</code> atitikmuo.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;2.525&lt;/code&gt; į &lt;code&gt;duration&lt;/code&gt; reikšmę.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
