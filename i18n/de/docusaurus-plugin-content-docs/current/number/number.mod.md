---
title: Number.Mod
---

# Number.Mod


Eine ganze Zahl dividiert zwei Zahlen und gibt den Restwert zurück.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Gibt den Rest zurück, der sich aus der ganzzahligen Division von `number` durch `divisor` ergibt. Wenn `number` oder `divisor` `NULL` sind, gibt diese Funktion `NULL` zurück.

-   `number`: Der Dividend.
-   `divisor`: Der Divisor.
-   `precision`: (Optional) Die Genauigkeit der Division der ganzen Zahl. Dieser Parameter kann entweder `Precision.Double` für `Double`\-Genauigkeit oder `Precision.Decimal` für `Decimal`\-Genauigkeit sein. Der Standardwert ist `Precision.Double`.


## Examples

### Example #1
Ermittelt den Rest der Division von 5 durch 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Ermitteln Sie den Rest, wenn Sie 10,5 durch 0,2 dividieren, und verwenden Sie dabei sowohl `Double`\- als auch `Decimal`\-Genauigkeit.
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
