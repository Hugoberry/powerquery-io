---
title: Time.ToText
---

# Time.ToText


Vrne predstavitev časovne vrednosti v obliki besedila.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrne predstavitev podatkov `time` v obliki besedila. Navedete lahko izbirni parameter `record`, `options`, ki določa dodatne lastnosti. `culture` se uporablja le za podedovane poteke dela. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, je datum zapisan v privzeti obliki zapisa, določeni s `Culture`.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. V `"en-US"` je na primer `"tt"` zapisan kot `"AM"ali"PM"`, medtem ko je v `"ar-EG"` vrednost `"tt"` zapisana kot `"ص"ali"م"`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za podporo podedovanih potekov dela lahko `options` in `culture` prav tako vključujeta besedilne vrednosti. To se obnaša enako, kot če je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Pretvorite `#time(01, 30, 25)` v vrednost `text`. *Rezultat se lahko razlikuje glede na trenutno kulturo.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Pretvorite v standardni obliki zapisa ure.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
