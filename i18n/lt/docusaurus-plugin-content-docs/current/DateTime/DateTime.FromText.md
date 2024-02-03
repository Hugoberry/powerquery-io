---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Datos ir laiko juosta sukuriama iš vietinio ir universaliojo datos bei laiko formatų.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Sukuriama <code>datetime</code> reikšmė iš tekstinės pateikties <code>text</code>. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>record</code> gali būti šie laukai:<ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code> reikšmę, data bus analizuojama naudojant geriausią bandymą.</li>    <li><code>Culture</code>: kai <code>Format</code> reikšmė nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"MMM"</code> yra <code>"Jan", "Feb", "Mar", ...</code>, o kai naudojama <code>"ru-RU"</code>, <code>"MMM"</code> yra <code>"янв", "фев", "мар", ...</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>.</li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;„2010-12-31T01:30:00“&lt;/code&gt; į datetime reikšmę.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertuokite &lt;code&gt;„2010-12-31T01:30:00.121212“&lt;/code&gt; į datetime reikšmę.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertuokite &lt;code&gt;„2010-12-31T01:30:00“&lt;/code&gt; į datetime reikšmę.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertuokite &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; į datetime reikšmę.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
