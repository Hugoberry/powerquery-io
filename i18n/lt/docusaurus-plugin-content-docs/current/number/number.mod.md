---
title: Number.Mod
---

# Number.Mod


Sveikasis skaičius dalija du skaičius ir pateikia liekaną.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Pateikia liekaną, gautą iš `number` sveikojo skaičiaus dalybos iš `divisor` rezultato. Jei `number` arba `divisor` yra `null`, ši funkcija pateikia `null`.

-   `number`: dalinys.
-   `divisor`: daliklis.
-   `precision`: (pasirenkama) sveikųjų skaičių dalybos tikslumas. Šis parametras gali būti `Precision.Double` – `Double` tikslumui arba `Precision.Decimal` – `Decimal` tikslumui. Numatytoji reikšmė yra `Precision.Double`.


## Examples

### Example #1
Raskite liekaną, kai dalijate 5 iš 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Raskite liekaną, kai dalijate 10,5 iš 0,2, naudodami tiek `Double`, tiek `Decimal` tikslumą.
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
