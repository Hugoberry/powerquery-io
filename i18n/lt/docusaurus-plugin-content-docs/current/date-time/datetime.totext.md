---
title: DateTime.ToText
---

# DateTime.ToText


Pateikiama datos ir laiko reikšmės tekstinė pateiktis.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Pateikiama `dateTime` tekstinė pateiktis. Norint nurodyti papildomas ypatybes, gali būti pateiktas pasirenkamas `record` parametras `options`. `culture` naudojamas tik senstelėjusioms darbo eigoms. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke `Culture`.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` ir `culture` taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = parinktys, Culture = kultūra]`.


## Examples

### Example #1
Konvertuokite `#datetime(2010, 12, 31, 01, 30, 25)` į `tekstinę` reikšmę. *Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.*
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
