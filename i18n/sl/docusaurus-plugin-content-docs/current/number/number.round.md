---
title: Number.Round
---

# Number.Round


Vrne zaokroženo število. Določite lahko število števk in način zaokroževanja.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Vrne rezultat zaokroževanja `number` na najbližjo številko. Če je `number` vrednost"null", `Number.Round` vrne ničelno vrednost.  
  
Privzeto je element `number` zaokrožen na najbližje celo število in izenačene vrednosti so razdeljene z zaokroževanjem na najbližje sodo število (z uporabo parametra `RoundingMode.ToEven`, imenovanega tudi"zaokroževanje bankirja").  
  
Te prevzete vrednosti lahko preglasite s temi privzetimi parametri.

-   `digits`: element `number`je zaokrožen na določeno število decimalnih števk.
-   `roundingMode`: privzeto vedenje razdelitve izenačenih vrednosti je preglašeno, ko ima element `number` srednjo vrednost med dvema potencialnima zaokroženima vrednostma (za možne vrednosti glejte `RoundingMode.Type`).


## Examples

### Example #1
Zaokrožite 1,234 na najbližje celo število.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Zaokrožite 1,56 na najbližje celo število.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Zaokrožite 1,2345 na dve decimalni mesti.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Zaokrožite 1,2345 na tri decimalna mesta (navzgor).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Zaokrožite 1,2345 na tri decimalna mesta (navzdol).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
