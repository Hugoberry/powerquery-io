---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Iš vietinio, universaliojo ir pasirinktinio datetimezone formatų sukuriama datetimezone reikšmė.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Sukuriama `datetimezone` reikšmė iš tekstinės pateikties `text`. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas `record` parametras `options`. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, laikas bus analizuojamas naudojant geriausią bandymą.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = null, Culture = parinktys]`.


## Examples

### Example #1
Konvertuokite `„2010-12-31T01:30:00-08:00“` į `datetimezone` reikšmę.
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
