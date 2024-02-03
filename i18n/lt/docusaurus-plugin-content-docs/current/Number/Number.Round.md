---
title: Number.Round
---

# Number.Round


## Description

Pateikiamas suapvalintas skaičius. Galima nurodyti skaitmenų skaičių ir apvalinimo režimą.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Pateikia <code>number</code> apvalinimo iki artimiausio skaičiaus rezultatą. Jei <code>number</code> yra „null“, <code>Number.Round</code> pateikia „null“.<br />      <br />      Pagal numatytuosius parametrus <code>number</code> apvalinamas iki artimiausio sveikojo skaičiaus, o ryšiai yra išskaidomi suapvalinant iki artimiausio lyginio skaičiaus (naudojant <code>RoundingMode.ToEven</code>, taip pat žinomą kaip „bankininko apvalinimas“).<br />      <br />      Tačiau šias numatytąsias reikšmes galima perrašyti naudojant toliau nurodytus pasirinktinius parametrus.      <ul>        <li><code>digits</code>: suapvalina <code>number</code> iki nurodyto dešimtainių skaitmenų skaičiaus.</li>        <li><code>roundingMode</code>: perrašo numatytąjį ryšių skaidymo veikimą, kai <code>number</code> yra viduryje tarp dviejų galimų suapvalintų reikšmių      (galimas reikšmes žr. <code>RoundingMode.Type</code>).</li>      </ul>


## Examples

### Example #1 
Apvalinkite 1,234 iki artimiausio sveikojo skaičiaus.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Apvalinkite 1,56 iki artimiausio sveikojo skaičiaus.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Apvalinkite 1,2345 iki dviejų dešimtainio skyriklio vietų.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Apvalinkite 1,2345 iki trijų dešimtainio skyriklio vietų (apvalinimas į didesniąją pusę).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Apvalinkite 1,2345 iki trijų dešimtainio skyriklio vietų (apvalinimas į mažesniąją pusę).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
