---
title: Time.From
---

# Time.From


## Description

Iš nurodytos reikšmės sukuriamas laikas.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Pateikiama <code>time</code> reikšmė iš nurodytos <code>value</code> reikšmės. Taip pat gali būti pateiktas pasirinktinis <code>culture</code> (pavyzdžiui, „en-US“).Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Time.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>time</code>, pateikiama <code>value</code>. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į <code>time</code> reikšmę:      <ul>        <li><code>text</code>: <code>time</code> reikšmė iš tekstinės pateikties. Išsamiau žr. <code>Time.FromText</code>.</li>        <li><code>datetime</code>: <code>value</code> laiko komponentas.</li>        <li><code>datetimezone</code>: vietinio datos ir laiko atitikmens <code>value</code> laiko komponentas.</li>        <li><code>number</code>: <code>time</code> reikšmė, atitinkanti dienų trupmenų, išreikštų <code>value</code>, skaičių. Jei <code>value</code> yra neigiamas, didesnis arba lygus 1 skaičius, pateikiama klaida.</li>      </ul>Jei <code>value</code> yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;0.7575&lt;/code&gt; į &lt;code&gt;time&lt;/code&gt; reikšmę.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Konvertuokite &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; į &lt;code&gt;time&lt;/code&gt; reikšmę.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
