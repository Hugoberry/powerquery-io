---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Iš vietinio, universaliojo ir pasirinktinio datetimezone formatų sukuriama datetimezone reikšmė.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Sukuriama <code>datetimezone</code> reikšmė iš tekstinės pateikties <code>text</code>. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas <code>record</code> parametras <code>options</code>. <code>record</code> gali būti šie laukai:<ul>   <li><code>Format</code>: <code>text</code> reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus <code>null</code> reikšmę, data bus analizuojama naudojant geriausią bandymą. </li>    <li><code>Culture</code>: kai <code>Format</code> reikšmė nėra „null“, <code>Culture</code> valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama <code>"en-US"</code>, <code>"MMM"</code> yra <code>"Jan", "Feb", "Mar", ...</code>, o kai naudojama <code>"ru-RU"</code>, <code>"MMM"</code> yra <code>"янв", "фев", "мар", ...</code>. Kai <code>Format</code> yra <code>null</code>, <code>Culture</code> valdo numatytąjį formatą, kuris turi būti naudojamas. Kai <code>Culture</code> yra <code>null</code> arba praleista, naudojama <code>Culture.Current</code>.</li></ul>Kad būtų palaikomos senstelėjusios darbo eigos, <code>options</code> taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertuokite &lt;code&gt;„2010-12-31T01:30:00-08:00“&lt;/code&gt; į &lt;code&gt;datetimezone&lt;/code&gt; reikšmę.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertuokite naudodami ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
