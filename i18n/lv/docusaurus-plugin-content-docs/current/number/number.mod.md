---
title: Number.Mod
---

# Number.Mod


Tiek atgriezts divu veselu skaitļu dalījuma atlikums.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Atgriež atlikumu, kas rodas, veicot veselu skaitļu dalīšanu ar `number` pēc `divisor`. Ja `number` vai `divisor` ir `null`, šī funkcija atgriež `null`.

-   `number`: Dalāmais.
-   `divisor`: Dalītājs.
-   `precision`: (Nav obligāti) Veselu skaitļu dalīšanas precizitāte. Šis parametrs var būt vai nu `Precision.Double` priekš `Double` precizitātes, vai `Precision.Decimal` priekš `Decimal` precizitātes. Noklusējuma vērtība ir `Precision.Double`.


## Examples

### Example #1
Iegūstiet atlikumu, kas rodas, 5 dalot ar 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Aprēķiniet atlikumu, dalot 10,5 ar 0,2, izmantojot gan `Double`, gan `Decimal` precizitāti.
```powerquery
let
    Dividend = 10.5,
    Divisor = 0.2,

    #"Use Double Precision" = Number.Mod(Dividend, Divisor, Precision.Double),
    #"Use Decimal Precision" = Number.Mod(Dividend, Divisor, Precision.Decimal),

    // Convert to text to inspect precision
    #"Double To Text" = Number.ToText(#"Use Double Precision", "G"),
    #"Decimal To Text" = Number.ToText(#"Use Decimal Precision", "G"),

    #"Display Result" = [
        DoublePrecision = #"Double To Text",
        DecimalPrecision = #"Decimal To Text"
    ]
in
    #"Display Result"
```

Result: 
```powerquery
[
    DoublePrecision = "0.0999999999999994",
    DecimalPrecision = "0.1"
]
```




## Category
Number.Operations
