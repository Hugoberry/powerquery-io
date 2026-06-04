---
title: Time.FromText
---

# Time.FromText


Creează o valoare Time din formatele Time locale, universale și particularizate.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Creează o valoare `time` dintr-o reprezentare textuală, `text`. Un parametru opțional de `record`, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. `record` poate conține următoarele câmpuri:

-   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează `null`, acest lucru va duce la analizarea datei utilizând cel mai bun efort.
-   `Culture`: atunci când `Format` nu este nul, `Culture` controlează anumiți specificatori de format. De exemplu, în `"en-US"` `"tt"` este `"AM" sau "PM"`, în timp ce în `"ar-EG"` `"tt"` este `"ص" sau "م"`. Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Atunci când `Culture` este `null` sau se omite, se utilizează `Culture.Current`.

Pentru a accepta fluxurile de lucru moștenite, `options` poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertiţi `"10:12:31am"` într-o valoare pentru oră.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Convertiți `"1012"` într-o valoare Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Convertiți `"10"` într-o valoare Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
