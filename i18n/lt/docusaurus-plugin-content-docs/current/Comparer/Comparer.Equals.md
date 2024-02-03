---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Pateikiama loginė reikšmė, pagrįsta dviejų pateiktų reikšmių lygybės patikra.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Pateikiama <code>loginė</code> reikšmė, pagrįsta dviejų pateiktų reikšmių (<code>x</code> ir <code>y</code>) lygybės patikra, naudojant nurodytą <code>comparer</code>.      <div>        <code>comparer</code> yra <code>lyginimo funkcija,</code> kuri yra naudojama lyginimui kontroliuoti.        Lyginimo funkcija – tai funkcija, kuri priima du argumentus ir pateikia -1, 0 arba 1, atsižvelgiant į tai, ar pirmoji vertė yra mažesnė, lygi ar didesnė nei antroji.        Lyginimo funkcijos gali būti naudojamos siekiant teikti lyginimus, kuriuose neskiriamos didžiosios ir mažosios raidės arba kuriuose atsižvelgiama į kultūrą ir lokalę.      </div>      <div>        Toliau įtaisytąsias lyginimo funkcijas galima naudoti formulių kalboje:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: naudojama tiksliam eiliškumo lyginimui atlikti</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: naudojama tiksliam eiliškumo lyginimui, kai neskiriamos didžiosios ir mažosios raidės, atlikti</li>        <li> <code>Comparer.FromCulture</code>: naudojama palyginimui, kuriame suvokiama kultūra, atlikti</li>      </ul>


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
