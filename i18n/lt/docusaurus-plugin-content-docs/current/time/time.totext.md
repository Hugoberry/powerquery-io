---
title: Time.ToText
---

# Time.ToText


Pateikiama laiko reikšmės tekstinė pateiktis.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Pateikiama `time` tekstinė pateiktis. Norint nurodyti papildomas ypatybes, gali būti pateiktas pasirenkamas `record` parametras `options`. `culture` naudojamas tik senstelėjusioms darbo eigoms. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke `Culture`.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama `"en-US"`, `"tt"` yra `"AM" or "PM"`, o kai naudojama `"ar-EG"`, `"tt"` yra `"ص" or "م"`. Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` ir `culture` taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = parinktys, Culture = kultūra]`.


## Examples

### Example #1
Konvertuokite `#time(01, 30, 25)` į `tekstinę` reikšmę. *Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.*
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
