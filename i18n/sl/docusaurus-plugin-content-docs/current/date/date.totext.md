---
title: Date.ToText
---

# Date.ToText


Vrne predstavitev datumske vrednosti v obliki besedila.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrne predstavitev podatkov `date` v obliki besedila. Navedete lahko izbirni parameter `record`, `options`, ki določa dodatne lastnosti. `culture` se uporablja le za podedovane poteke dela. `Record` lahko vključuje naslednja polja:

-   `Format`: Vrednost `text`, ki označuje obliko zapisa, ki jo morate uporabiti. Več informacij je na voljo na spletnih mestih https://go.microsoft.com/fwlink/?linkid=2180104 in https://go.microsoft.com/fwlink/?linkid=2180105. Če to polje izpustite ali navedete vrednost `null`, je datum zapisan v privzeti obliki zapisa, določeni s `Culture`.
-   `Culture`: če za `Format` ni izbrana vrednost"null", `Culture` nadzira nekatere določitelje oblike zapisa. Na primer, v `"en-US"` `""MMM"` je `"Jan","Feb","Mar"...`, za `"ru-RU"` pa `"MMM"` predstavlja `"янв","фев","мар"...`. Če je `Format` `null`, `Culture` določa privzeto obliko zapisa, ki jo morate uporabiti. Če je za `Culture` izbrana vrednost `null` ali je ta izpuščena, je uporabljena vrednost `Culture.Current`.

Za podporo podedovanih potekov dela lahko `options` in `culture` prav tako vključujeta besedilne vrednosti. To se obnaša enako, kot če je `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Pretvorite `#date(2010, 12, 31)` v vrednost `text`. *Rezultat se lahko razlikuje glede na trenutno kulturo.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Pretvorite z obliko zapisa po meri in uporabo nemške kulture.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Poiščite datum v koledarju Hijri, ki ustreza 1. januarju 2000 v gregorijanskem koledarju.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
