---
title: Number.Mod
---

# Number.Mod


Выполняет целочисленное деление одного числа на другое и возвращает остаток от деления.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Возвращает остаток от целочисленного деления `number` на `divisor`. Если `number` или `divisor` равен `null`, эта функция возвращает `null`.

-   `number`: Делимое.
-   `divisor`: Делитель.
-   `precision`: (Необязательно) Точность целочисленного деления. Этот параметр может быть либо `Precision.Double` для точности `Double`, либо `Precision.Decimal` для точности `Decimal`. Значение по умолчанию — `Precision.Double`.


## Examples

### Example #1
Найти остаток от деления 5 на 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```


### Example #2
Найдите остаток от деления 10,5 на 0,2, используя как точность `Double`, так и точность `Decimal`.
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
