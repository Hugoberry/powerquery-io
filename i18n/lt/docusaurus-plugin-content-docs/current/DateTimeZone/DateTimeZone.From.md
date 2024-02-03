---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Iš nurodytos reikšmės sukuriama datos ir laiko juosta.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Pateikiama <code>datetimezone</code> reikšmė iš nurodytos <code>value</code> reikšmės. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).Jei nurodyta <code>value</code> yra <code>null</code>, <code>DateTimeZone.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>datetimezone</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>datetimezone</code> reikšmę:      <ul>        <li><code>text</code>: <code>datetimezone</code> reikšmė iš tekstinės pateikties. Išsamiau žr. <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: <code>datetimezone</code> su <code>value</code> kaip datos komponentu, <code>12:00:00 AM</code> kaip laiko komponentu ir poslinkiu, atitinkančiu vietinę laiko juostą.</li>        <li><code>datetime</code>: <code>datetimezone</code> su <code>value</code> kaip datos ir laiko komponentas bei poslinkis, atitinkantis vietinę laiko juostą.</li>        <li><code>time</code>: <code>datetimezone</code> su <code>0</code> OLE automatizavimo datos kaip datos komponento atitikmeniu, <code>value</code> kaip laiko komponentu ir poslinkiu, atitinkančiu vietinę laiko juostą.</li>        <li><code>number</code>: <code>datetimezone</code> su datos ir laiko atitikmeniu, kurį OLE automatizavimo data išreiškė <code>value</code>, ir poslinkiu, atitinkančiu vietinę laiko juostą.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; į &lt;code&gt;datetimezone&lt;/code&gt; reikšmę.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
