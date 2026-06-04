---
title: DateTime.FromText
---

# DateTime.FromText


Datos ir laiko juosta sukuriama iš vietinio ir universaliojo datos bei laiko formatų.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Sukuriama `datetime` reikšmė iš tekstinės pateikties, `text`. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas `record` parametras `options`. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, laikas bus analizuojamas naudojant geriausią bandymą.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, Aplinkos `„en-US“` `MMM` yra `„Jan“, „Feb“, „Mar“, ...` , o Aplinkos `„ru-RU“` `MMM` yra `„нни“, „фар“, „нар“, ...` . Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = null, Culture = parinktys]`.


## Examples

### Example #1
Konvertuokite `„2010-12-31T01:30:00“` į datetime reikšmę.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertuokite `„2010-12-31T01:30:00.121212“` į datetime reikšmę.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertuokite `„2010-12-31T01:30:00“` į datetime reikšmę.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertuokite `"20101231T013000"` į datetime reikšmę.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
