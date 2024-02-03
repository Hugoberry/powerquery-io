---
title: DateTime.From
---

# DateTime.From


## Description

Iš nurodytos reikšmės sukuriama data ir laikas.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Pateikiama <code>datetime</code> reikšmė iš nurodytos <code>value</code> reikšmės. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>DateTime.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>datetime</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>datetime</code> reikšmę:      <ul>        <li><code>text</code>: <code>datetime</code> reikšmė iš tekstinės pateikties. Išsamiau žr. <code>DateTime.FromText</code>.</li>        <li><code>date</code>: <code>datetime</code> su <code>value</code> kaip datos komponentu ir <code>12:00:00 AM</code> kaip laiko komponentu.</li>        <li><code>datetimezone</code>: vietinis <code>datetime</code> <code>value</code> atitikmuo.</li>        <li><code>time</code>: <code>datetime</code> su <code>0</code> OLE automatizavimo datos atitikmeniu kaip datos komponentu ir <code>value</code> kaip laiko komponentu.</li>        <li><code>number</code>: <code>datetime</code> atitikmuo, kurį OLE automatizavimo data išreiškia <code>value</code>. </li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; į &lt;code&gt;datetime&lt;/code&gt; reikšmę.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Konvertuokite &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; į &lt;code&gt;datetime&lt;/code&gt; reikšmę.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
