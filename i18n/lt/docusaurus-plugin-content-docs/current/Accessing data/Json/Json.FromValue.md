---
title: Json.FromValue
---

# Json.FromValue


## Description

Sukuriamas konkrečios reikšmės atitikmuo JSON formatu.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Details

Sukuriamas nurodytos reikšmės <code>value</code> atitikmuo JSON formatu naudojant teksto koduotę, kurią nurodo <code>encoding</code>. Jei praleista <code>encoding</code>, naudojama UTF8. Reikšmės pateikiamos taip, kaip nurodyta toliau.<br /> <ul>        <li>Reikšmė „null“, tekstinės ir loginės reikšmės pateikiamos kaip atitinkami JSON tipai.</li>        <li>Skaičiai pateikiami kaip skaičiai JSON formatu, išskyrus tai, kad <code>#infinity</code>, <code>-#infinity</code> ir <code>#nan</code> konvertuojami į reikšmę „null“.</li>        <li>Sąrašai pateikiami kaip JSON masyvai.</li>        <li>Įrašai pateikiami kaip JSON objektai.</li>        <li>Lentelės pateikiamos kaip objektyvų masyvas.</li>        <li>Datos, laiko, datos ir laiko, datos bei laiko juostos ir trukmės reikšmės pateikiamos kaip ISO-8601 tekstas.</li>        <li>Dvejetainės reikšmės pateikiamos kaip tekstas, užkoduotas naudojant „base-64“.</li>        <li>Tipai ir funkcijos sukelia klaidą.</li> </ul>    


## Examples

### Example #1 
Konvertuokite sudėtinę reikšmę į JSON formato duomenis.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
