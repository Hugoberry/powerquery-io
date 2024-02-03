---
title: Time.ToText
---

# Time.ToText


## Description

Pateikiama laiko reikšmės tekstinė pateiktis.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Pateikiama <code>time</code> tekstinė pateiktis. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>culture</code> naudojamas tik senstelėjusioms darbo eigoms. <code>record</code> gali būti šie laukai:<ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code> reikšmę, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke <code>Culture</code>.</li>   <li><code>Culture</code>: Kai <code>Format</code> nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"tt"</code> yra <code>"AM" or "PM"</code>, o kai naudojama <code>"ar-EG"</code>, <code>"tt"</code> yra <code>"ص" arba "م"</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>.</li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> ir <code>culture</code> taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai  <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; į &lt;code&gt;tekstinę&lt;/code&gt; reikšmę. &lt;i&gt;Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertuokite naudodami standartinį laiko formatą.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
