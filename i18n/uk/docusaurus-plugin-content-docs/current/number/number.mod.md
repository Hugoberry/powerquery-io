---
title: Number.Mod
---

# Number.Mod


Функція цілочисельного ділення ділить два числа та повертає залишок.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Повертає залишок від ділення цілого числа `number` на `divisor`. Якщо значення `number` або `divisor` – `null`, ця функція повертає `null`.

-   `number`: ділене.
-   `divisor`: дільник.
-   `precision`: (необов’язково) точність ділення цілого числа. Цей параметр може бути `Precision.Double` для точності `Double` або `Precision.Decimal` для точності `Decimal`. Стандартне значення – `Precision.Double`.


## Examples

### Example #1
Знайти залишок від ділення 5 на 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Знайди залишок від ділення 10,5 на 0,2, використовуючи точність `Double` та точність `Decimal`.
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
