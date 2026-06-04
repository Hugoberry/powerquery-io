---
title: Time.FromText
---

# Time.FromText


Ustvari vrednost"Time"iz lokalnih in univerzalnih oblik"Time".


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Ustvari vrednost `time` iz predstavitve podatkov v obliki besedila, `text`. Naveden je lahko izbirni parameter `record`, `options`, za določanje dodatnih lastnosti. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Podrobnosti so na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, bo čas razčlenjen po najboljših močeh.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. V `"en-US"` je na primer `"tt"` zapisan kot `"AM"ali"PM"`, medtem ko je v `"ar-EG"` vrednost `"tt"` zapisana kot `"ص"ali"م"`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za uporabo podedovanih potekov dela lahko `options` prav tako vključuje besedilno vrednost. To se obnaša enako, kot če je `= [Format = null, Culture = options]`.


## Examples

### Example #1
Pretvorite `"10:12:31am"` v vrednost"Time".
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Pretvorite `"1012"` v vrednost"Time".
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Pretvorite `"10"` v vrednost"Time".
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
