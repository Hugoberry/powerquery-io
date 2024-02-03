---
title: Number.Round
---

# Number.Round


## Description

Palauttaa pyöristetyn luvun. Numeroiden määrä ja pyöristystila voidaan määrittää.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Palauttaa pyöristyksen <code>number</code> tuloksen lähimpään numeroon. Jos <code>number</code> on tyhjäarvo, <code>Number.Round</code> palauttaa tyhjäarvon.<br />      <br />      Oletusarvoisesti <code>number</code> pyöristetään lähimpään kokonaislukuun, ja suhteet katkaistaan pyöristämällä lähimpään parilliseen numeroon (käyttäen <code>RoundingMode.ToEven</code>, joka tunnetaan myös nimellä "pankkiirin pyöristys").<br />      <br />      Nämä oletusarvot voidaan kuitenkin ohittaa seuraavien valinnaisten parametrien avulla.      <ul>        <li><code>digits</code>: aiheuttaa sen, että <code>number</code> pyöristetään tiettyyn määrään desimaaleja.</li>        <li><code>roundingMode</code>: ohittaa suhteiden katkaisemisen oletuskäyttäytymisen, kun <code>number</code> on kahden mahdollisen pyöristyksen keskipisteessä      (Katso kohteesta <code>RoundingMode.Type</code> mahdollisia arvoja).</li>      </ul>


## Examples

### Example #1 
Pyöristä luku 1,234 lähimpään kokonaislukuun.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Pyöristä luku 1,56 lähimpään kokonaislukuun.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Pyöristä luku 1,2345 kahteen desimaaliin.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Pyöristä luku 1,2345 kolmeen desimaaliin (pyöristys ylöspäin).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Pyöristä luku 1,2345 kolmeen desimaaliin (pyöristys alaspäin).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
