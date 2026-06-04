---
title: Date.ToText
---

# Date.ToText


Returnează o reprezentare textuală a valorii de tip dată.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnează o reprezentare textuală a `date`. Un parametru opțional de `record`, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. `culture` este utilizat numai pentru fluxuri de lucru moștenite. `record` poate conține următoarele câmpuri:

-   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea `null` va duce la formatarea datei utilizând valoarea implicită definită de `Culture`.
-   `Culture`: atunci când `Format` nu este nul, `Culture` controlează anumiți specificatori de format. De exemplu, în `"en-US"` `"MMM"` este `"Ian", "Feb", "Mar", ...` , în `"ru-RU"` `"MMM"` este `"яннн", "фар", "мар", ...` . Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Atunci când `Culture` este `null` sau se omite, se utilizează `Culture.Current`.

Pentru a accepta fluxurile de lucru moștenite, `options` și `culture` pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Efectuați conversia `#date(2010, 12, 31)` într-o valoare `text`. *Rezultatul poate varia în funcție de cultura actuală.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Găsiți anul din calendarul Hijri care corespunde datei de 1 ianuarie 2000 din calendarul gregorian.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
