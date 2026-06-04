---
title: Json.FromValue
---

# Json.FromValue


Sukuriamas konkrečios reikšmės atitikmuo JSON formatu.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Sukuria nurodytos reikšmės JSON atvaizdavimą `value` su teksto kodavimu, nurodytu `encoding`. Jei praleista `encoding`, naudojama UTF8. Reikšmės pateikiamos taip, kaip nurodyta toliau:

-   Reikšmė „null“, tekstinės ir loginės reikšmės pateikiamos kaip atitinkami JSON tipai
-   Skaičiai pateikiami kaip skaičiai JSON formatu, išskyrus tai, kad `#infinity`, `-#infinity` ir `#nan` konvertuojami į reikšmę „null“
-   Sąrašai pateikiami kaip JSON masyvai
-   įrašai pateikiami kaip JSON objektai
-   Lentelės pateikiamos kaip objektyvų masyvas
-   Datos, laiko, datos ir laiko, datos bei laiko juostos ir trukmės reikšmės pateikiamos kaip ISO-8601 tekstas
-   Dvejetainės reikšmės pateikiamos kaip tekstas, užkoduotas naudojant „base-64“
-   Tipai ir funkcijos pateikia klaidą


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
