---
title: Date.ToText
---

# Date.ToText


## Description

Pateikiama datos reikšmės tekstinė pateiktis.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Pateikiama <code>date</code> tekstinė pateiktis. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>culture</code> naudojamas tik senstelėjusioms darbo eigoms. <code>record</code> gali būti šie laukai: <ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code>, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke <code>Culture</code>. </li>   <li><code>Culture</code>: kai <code>Format</code> reikšmė nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"MMM"</code> yra <code>"Jan", "Feb", "Mar", ...</code>, o kai naudojama <code>"ru-RU"</code>, <code>"MMM"</code> yra <code>"янв", "фев", "мар", ...</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>. </li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> ir <code>culture</code> taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; į &lt;code&gt;tekstinę&lt;/code&gt; reikšmę. &lt;i&gt;Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Raskite datą Hidžros kalendoriuje, atitinkančią 2000 sausio 1-ąją Grigaliaus kalendoriuje.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
