---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Vrne predstavitev vrednosti"datetimezone"v obliki besedila.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrne predstavitev podatkov `dateTimeZone` v obliki besedila. Navedete lahko izbirni parameter `record`, `options`, ki določa dodatne lastnosti. `culture` se uporablja le za podedovane poteke dela. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, je datum zapisan v privzeti obliki zapisa, določeni s `Culture`.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. Na primer, v `"en-US"` `""MMM"` je `"Jan","Feb","Mar"...`, za `"ru-RU"` pa `"MMM"` predstavlja `"янв","фев","мар"...`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za podporo podedovanih potekov dela lahko `options` in `culture` prav tako vključujeta besedilne vrednosti. To se obnaša enako, kot če je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Pretvorite `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` v vrednost `text`. *Rezultat se lahko razlikuje glede na trenutno kulturo.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Pretvorite z vzorcem ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
