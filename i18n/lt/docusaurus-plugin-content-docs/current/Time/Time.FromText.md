---
title: Time.FromText
---

# Time.FromText


## Description

Iš vietinio, universaliojo ir pasirinktinio Time formatų sukuriame Time reikšmė.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Sukuriama <code>time</code> reikšmė iš tekstinės pateikties <code>text</code>. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>record</code> gali būti šie laukai:<ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code> reikšmę, laikas bus analizuojamas naudojant geriausią bandymą.</li>   <li><code>Culture</code>: kai <code>Format</code> reikšmė nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"tt"</code> yra <code>"AM" or "PM"</code>, o kai naudojama <code>"ar-EG"</code>, <code>"tt"</code> yra <code>"ص" or "م"</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>.</li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; į laiko reikšmę.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertuokite &lt;code&gt;&#34;1012&#34;&lt;/code&gt; į laiko reikšmę.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertuokite &lt;code&gt;&#34;10&#34;&lt;/code&gt; į laiko reikšmę.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
