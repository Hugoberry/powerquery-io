---
title: DateTime.FromText
---

# DateTime.FromText


Creează o valoare datetimezone din formatele datetime locale şi universale.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Creează o valoare `datetime` dintr-o reprezentare textuală, `text`. Un parametru opțional de `record`, `options`, poate fi furnizat pentru a specifica proprietăți suplimentare. `record` poate conține următoarele câmpuri:

-   `Format`: o valoare `text` care indică formatul de utilizat. Pentru mai multe detalii, accesați https://go.microsoft.com/fwlink/?linkid=2180104 și https://go.microsoft.com/fwlink/?linkid=2180105. Dacă se omite acest câmp sau se furnizează `null`, acest lucru va duce la analizarea datei utilizând cel mai bun efort.
-   `Culture`: atunci când `Format` nu este nul, `Culture` controlează anumiți specificatori de format. De exemplu, în `"en-US"` `"MMM"` este `"Ian", "Feb", "Mar", ...` , în `"ru-RU"` `"MMM"` este `"яннн", "фар", "мар", ...` . Când `Format` este `null`, `Culture` controlează formatul implicit de utilizat. Atunci când `Culture` este `null` sau se omite, se utilizează `Culture.Current`.

Pentru a accepta fluxurile de lucru moștenite, `options` poate fi, de asemenea, o valoare text. Acesta are același comportament ca și cum `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Efectuați conversia `"2010-12-31T01:30:00"` într-o valoare datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Efectuați conversia `"2010-12-31T01:30:00.121212"` într-o valoare datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Efectuați conversia `"2010-12-31T01:30:00"` într-o valoare datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Efectuați conversia `"20101231T013000"` într-o valoare datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
