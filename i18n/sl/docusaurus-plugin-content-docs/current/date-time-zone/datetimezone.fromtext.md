---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Ustvari"datetimezone"iz lokalnih, univerzalnih in oblik"datetimezone"po meri.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Ustvari vrednost `datetimezone` iz predstavitve podatkov v obliki besedila, `text`. Naveden je lahko izbirni parameter `record`, `options`, za določanje dodatnih lastnosti. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, bo datum razčlenjen po najboljših močeh.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. Na primer, v `"en-US"` `""MMM"` je `"Jan","Feb","Mar"...`, za `"ru-RU"` pa `"MMM"` predstavlja `"янв","фев","мар"...`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za uporabo podedovanih potekov dela lahko `options` prav tako vključuje besedilno vrednost. To se obnaša enako, kot če je `= [Format = null, Culture = options]`.


## Examples

### Example #1
Pretvorite `"2010-12-31T01:30:00-08:00"` v vrednost"`datetimezone`".
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Pretvorite s protokolom ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
