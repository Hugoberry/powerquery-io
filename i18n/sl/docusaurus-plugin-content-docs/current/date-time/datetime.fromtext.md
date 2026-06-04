---
title: DateTime.FromText
---

# DateTime.FromText


Ustvari"datetimezone"iz lokalnih in univerzalnih oblik"datetime".


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Ustvari vrednost `datetime` iz besedilne predstavitve, `text`. Naveden je lahko izbirni parameter `record`, `options`, za določanje dodatnih lastnosti. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, bo datum razčlenjen po najboljših močeh.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. Na primer, v `"en-US"` `""MMM"` je `"Jan","Feb","Mar"...`, za `"ru-RU"` pa `"MMM"` predstavlja `"янв","фев","мар"...`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za uporabo podedovanih potekov dela lahko `options` prav tako vključuje besedilno vrednost. To se obnaša enako, kot če je `= [Format = null, Culture = options]`.


## Examples

### Example #1
Pretvorite `"2010-12-31T01:30:00"` v vrednost"datetime".
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Pretvorite `"2010-12-31T01:30:00.121212"` v vrednost"datetime".
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Pretvorite `"2010-12-31T01:30:00"` v vrednost"datetime".
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Pretvorite `"20101231T013000"` v vrednost"datetime".
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
