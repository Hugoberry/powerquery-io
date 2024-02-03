---
title: Number.Round
---

# Number.Round


## Description

Vráti zaokrúhlené číslo. Možno zadať počet číslic aj spôsob zaokrúhlenia.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Vráti výsledok zaokrúhlenia <code>number</code> na najbližšie číslo. Ak <code>number</code> má hodnotu null, <code>Number. Round</code> vráti hodnotu null.<br />      <br />      Predvolene sa <code>number</code> zaokrúhli na najbližšie celé číslo a prepojenia sa zaokrúhlia na najbližšie párne číslo (použitím <code>RoundingMode.ToEven</code>, známeho tiež ako „bankárske zaokrúhlenie“).<br />      <br />      Tieto predvolené hodnoty však možno prepísať pomocou nasledujúcich voliteľných parametrov.       <ul>        <li><code>digits</code>: spôsobí, že <code>number</code> sa zaokrúhli na zadaný počet desatinných miest. </li>        <li><code>roundingMode</code>: Prepíše predvolené riešenie zhôd, keď sa <code>number</code> nachádza v strede medzi dvomi potenciálnymi zaokrúhlenými hodnotami.      (pozrite <code>RoundingMode.Type</code> , kde nájdete možné hodnoty).</li>      </ul>


## Examples

### Example #1 
Zaokrúhlite číslo 1,234 na najbližšie celé číslo.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Zaokrúhlite číslo 1,56 na najbližšie celé číslo.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Zaokrúhlite číslo 1,2345 na dve desatinné miesta.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Zaokrúhlite číslo 1,2345 na tri desatinné miesta (zaokrúhlenie nahor).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Zaokrúhlite číslo 1,2345 na tri desatinné miesta (zaokrúhlenie nadol).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
