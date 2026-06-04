---
title: Number.Mod
---

# Number.Mod


Екі санды бүтін бөледі және қалдықты қайтарады.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number` бүтін санын `divisor` санына бөлгендегі қалдықты қайтарады. `number` немесе `divisor` `null` болса, бұл функция `null` мәнін қайтарады.

-   `number`: Бөлінгіш.
-   `divisor`: Бөлгіш.
-   `precision`: (Міндетті емес) Бүтін санды бөлудің дәлдігі. Бұл параметр `Double` дәлдігі үшін `Precision.Double` немесе `Decimal` дәлдігі үшін `Precision.Decimal` болуы мүмкін. Әдепкі мән — `Precision.Double`.


## Examples

### Example #1
5 санын 3 санына бөлген кездегі қалдықты анықтау.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
10,5-ті 0,2-ге бөлгенде қалған қалдықты `Double` дәлдігі мен `Decimal` дәлдігінің екеуімен табыңыз.
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
