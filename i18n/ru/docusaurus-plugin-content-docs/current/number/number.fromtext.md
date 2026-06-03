---
title: Number.FromText
---

# Number.FromText


Создает числа из стандартных текстовых форматов ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Возвращает значение `number` из заданного текстового значения `text`.

-   `text`: текстовое представление числового значения. Представление должно быть в обычном числовом формате, например: "15", "3,423.10" или "5.0E-10".
-   `culture`: необязательное значение языка и региональных параметров, определяющее, как интерпретируется `text` (например, "ru-RU").


## Examples

### Example #1
Возвратить числовое значение `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Возвратить числовое значение `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
