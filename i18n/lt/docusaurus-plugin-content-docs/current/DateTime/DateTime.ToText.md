---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Pateikiama datos ir laiko reikšmės tekstinė pateiktis.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Pateikiama <code>dateTime</code> tekstinė pateiktis. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>culture</code> naudojamas tik senstelėjusioms darbo eigoms. <code>record</code> gali būti šie laukai: <ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code>, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke <code>Culture</code>. </li>   <li><code>Culture</code>: kai <code>Format</code> reikšmė nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"MMM"</code> yra <code>"Jan", "Feb", "Mar", ...</code>, o kai naudojama <code>"ru-RU"</code>, <code>"MMM"</code> yra <code>"янв", "фев", "мар", ...</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>. </li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> ir <code>culture</code> taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; į &lt;code&gt;tekstinę&lt;/code&gt; reikšmę. &lt;i&gt;Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Konvertuokite naudodami ISO 8601 šabloną.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
