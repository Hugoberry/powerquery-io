---
title: Date.From
---

# Date.From


## Description

Naudojant nurodytą reikšmę sukuriama data.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Pateikiama <code>date</code> reikšmė iš nurodytos <code>value</code> reikšmės. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Date.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>date</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>date</code> reikšmę:      <ul>        <li><code>text</code>: <code>date</code> reikšmė iš tekstinės pateikties. Išsamiau žr. <code>Date.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> datos komponentas.</li>        <li><code>datetimezone</code>: vietinio <code>value</code> datos ir laiko atitikmens datos komponentas.</li>        <li><code>number</code>: datos ir laiko atitikmens datos komponentas, kurį OLE automatizavimo data išreiškia <code>value</code>.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;43910&lt;/code&gt; į &lt;code&gt;date&lt;/code&gt; reikšmę.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertuokite &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; į &lt;code&gt;date&lt;/code&gt; reikšmę.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
