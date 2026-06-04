---
title: Time.ToText
---

# Time.ToText


Returnează o reprezentare textuală a valorii de tip oră.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnează o reprezentare textuală a `time`. Un parametru opțional de `record`, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. `culture` este utilizat numai pentru fluxuri de lucru moștenite. `record` poate conține următoarele câmpuri:

-   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea `null` va duce la formatarea datei utilizând valoarea implicită definită de `Culture`.
-   `Culture`: atunci când `Format` nu este nul, `Culture` controlează anumiți specificatori de format. De exemplu, în `"en-US"` `"tt"` este `"AM" sau "PM"`, în timp ce în `"ar-EG"` `"tt"` este `"ص" sau "م"`. Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Atunci când `Culture` este `null` sau se omite, se utilizează `Culture.Current`.

Pentru a accepta fluxurile de lucru moștenite, `options` și `culture` pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Efectuați conversia `#time(01, 30, 25)` într-o valoare `text`. *Rezultatul poate varia în funcție de cultura actuală.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Efectuați conversia utilizând formatul de oră standard.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
