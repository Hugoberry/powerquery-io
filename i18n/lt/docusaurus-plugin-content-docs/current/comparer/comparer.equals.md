---
title: Comparer.Equals
---

# Comparer.Equals


Pateikiama loginė reikšmė, pagrįsta dviejų pateiktų reikšmių lygybės patikra.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Pateikiama `loginė` reikšmė, pagrįsta dviejų pateiktų reikšmių (`x` ir `y`) lygybės patikra, naudojant nurodytą `comparer`.

`comparer` yra `lyginimo funkcija,` kuri yra naudojama lyginimui kontroliuoti. Lyginimo funkcija – tai funkcija, kuri priima du argumentus ir pateikia -1, 0 arba 1, atsižvelgiant į tai, ar pirmoji vertė yra mažesnė, lygi ar didesnė nei antroji. Lyginimo funkcijos gali būti naudojamos siekiant teikti lyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės arba kuriuose atsižvelgiama į kultūrą ir lokalę.

Toliau įtaisytąsias lyginimo funkcijas galima naudoti formulių kalboje:

-   `Comparer.Ordinal`: naudojama tiksliam eiliškumo lyginimui atlikti
-   `Comparer.OrdinalIgnoreCase`: naudojama tiksliam eiliškumo lyginimui, kai neskiriamos didžiosios ir mažosios raidės, atlikti
-   `Comparer.FromCulture`: naudojama palyginimui, kuriame suvokiama kultūra, atlikti


## Examples

### Example #1
Palyginkite „1“ ir „A“ naudodami lokalę „en-US“, kad nustatytumėte, ar reikšmės lygios.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
