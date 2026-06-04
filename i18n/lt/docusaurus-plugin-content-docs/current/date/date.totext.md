---
title: Date.ToText
---

# Date.ToText


Pateikiama datos reikšmės tekstinė pateiktis.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Pateikiama `date` tekstinė pateiktis. Norint nurodyti papildomas ypatybes, gali būti pateiktas pasirenkamas `record` parametras `options`. `culture` naudojamas tik senstelėjusioms darbo eigoms. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke `Culture`.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` ir `culture` taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = parinktys, Culture = kultūra]`.


## Examples

### Example #1
Konvertuokite `#date(2010, 12, 31)` į `tekstinę` reikšmę. *Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.*
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
