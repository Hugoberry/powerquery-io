---
title: Number.Mod
---

# Number.Mod


Geheel getal deelt twee getallen en retourneert de rest.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Geeft de rest terug die ontstaat uit de gehele deling van `number` door `divisor`. Als `number` of `divisor` `null` zijn, geeft deze functie `null` terug.

-   `number`: het deeltal.
-   `divisor`: de deler.
-   `precision`: (Optioneel) De precisie van de deling van het gehele getal. Deze parameter kan `Precision.Double` zijn voor `Double` precisie of `Precision.Decimal` voor `Decimal` precisie. De standaardwaarde is `Precision.Double`.


## Examples

### Example #1
De rest zoeken wanneer u 5 door 3 deelt.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Bereken het restant bij het delen van 10,5 door 0,2 met zowel `dubbele` precisie als `decimale` precisie.
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
