---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Pateikiama datos ir laiko juostos reikšmės tekstinė pateiktis.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Pateikiama `dateTimeZone` tekstinė pateiktis. Norint nurodyti papildomas ypatybes, gali būti pateiktas pasirenkamas `record` parametras `options`. `culture` naudojamas tik senstelėjusioms darbo eigoms. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, data bus suformatuota naudojant numatytąsias reikšmes, apibrėžtas lauke `Culture`.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` ir `culture` taip pat gali būti tekstinės reikšmės. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = parinktys, Culture = kultūra]`.


## Examples

### Example #1
Konvertuokite `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` į `tekstinę` reikšmę. *Rezultatų išvestis gali skirtis atsižvelgiant į dabartinę kultūrą.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Konvertuokite naudodami pasirinktinį formatą ir vokiečių kultūrą.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Konvertuokite naudodami ISO 8601 šabloną.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
