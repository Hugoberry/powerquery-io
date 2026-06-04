---
title: Number.Round
---

# Number.Round


Palauttaa pyöristetyn luvun. Numeroiden määrä ja pyöristystila voidaan määrittää.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Palauttaa pyöristyksen `number` tuloksen lähimpään numeroon. Jos `number` on tyhjäarvo, `Number.Round` palauttaa tyhjäarvon.  
  
Oletusarvoisesti `number` pyöristetään lähimpään kokonaislukuun, ja suhteet katkaistaan pyöristämällä lähimpään parilliseen numeroon (käyttäen `RoundingMode.ToEven`, joka tunnetaan myös nimellä "pankkiirin pyöristys").  
  
Nämä oletusarvot voidaan kuitenkin ohittaa seuraavien valinnaisten parametrien avulla.

-   `digits`: aiheuttaa sen, että `number` pyöristetään tiettyyn määrään desimaaleja.
-   `roundingMode`: ohittaa suhteiden katkaisemisen oletuskäyttäytymisen, kun `number` on kahden mahdollisen pyöristyksen keskipisteessä (Katso kohteesta `RoundingMode.Type` mahdollisia arvoja).


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
