---
title: DateTime.ToText
---

# DateTime.ToText


Returnează o reprezentare textuală a valorii datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returnează o reprezentare textuală a `dateTime`. Un parametru opțional de `record`, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. `culture` este utilizat numai pentru fluxuri de lucru moștenite. `record` poate conține următoarele câmpuri:

-   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Omiterea acestui câmp sau furnizarea `null` va duce la formatarea datei utilizând valoarea implicită definită de `Culture`.
-   `Culture`: atunci când `Format` nu este nul, `Culture` controlează anumiți specificatori de format. De exemplu, în `"en-US"` `"MMM"` este `"Ian", "Feb", "Mar", ...` , în `"ru-RU"` `"MMM"` este `"яннн", "фар", "мар", ...` . Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Atunci când `Culture` este `null` sau se omite, se utilizează `Culture.Current`.

Pentru a accepta fluxurile de lucru moștenite, `options` și `culture` pot fi, de asemenea, valori text. Aceasta are același comportament ca și cum `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Efectuați conversia `#datetime(2010, 12, 31, 01, 30, 25)` într-o valoare `text`. *Rezultatul poate varia în funcție de cultura actuală.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Efectuați conversia utilizând un format particularizat și cultura germană.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Efectuați conversia utilizând modelul ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
