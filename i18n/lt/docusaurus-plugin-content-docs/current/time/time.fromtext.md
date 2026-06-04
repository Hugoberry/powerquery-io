---
title: Time.FromText
---

# Time.FromText


Iš vietinio, universaliojo ir pasirinktinio Time formatų sukuriame Time reikšmė.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Sukuriama `time` reikšmė iš tekstinės pateikties `text`. Papildomoms ypatybėms nurodyti gali būti pateikiamas pasirenkamas `record` parametras `options`. `record` gali būti šie laukai:

-   `Format`: `text` reikšmė, nurodanti reikiamą naudoti formatą. Išsamiau žr. https://go.microsoft.com/fwlink/?linkid=2180104 ir https://go.microsoft.com/fwlink/?linkid=2180105. Praleidus šį lauką arba pateikus `null` reikšmę, laikas bus analizuojamas naudojant geriausią bandymą.
-   `Culture`: Kai `Format` nėra „null“, `Culture` valdo kai kuriuos formato specifikatorius. Pavyzdžiui, kai naudojama `"en-US"`, `"tt"` yra `"AM" or "PM"`, o kai naudojama `"ar-EG"`, `"tt"` yra `"ص" arba "م"`. Kai `Format` yra `null`, `Culture` valdo numatytąjį formatą, kuris turi būti naudojamas. Kai `Culture` yra `null` arba praleista, naudojama `Culture.Current`.

Kad būtų palaikomos senstelėjusios darbo eigos, `options` taip pat gali būti tekstinė reikšmė. Tai veikia taip pat kaip tuo atveju, kai `parinktys = [Format = null, Culture = parinktys]`.


## Examples

### Example #1
Konvertuokite `"10:12:31am"` į laiko reikšmę.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Konvertuokite `"1012"` į laiko reikšmę.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Konvertuokite `"10"` į laiko reikšmę.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
