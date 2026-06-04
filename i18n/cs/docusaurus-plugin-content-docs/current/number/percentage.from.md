---
title: Percentage.From
---

# Percentage.From


Vrátí procentní hodnotu ze zadané hodnoty.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Vrátí hodnotu typu `percentage` ze zadaného parametru `value`. Pokud jako `value` zadáte `null`, `Percentage.From` vrátí `null`. Pokud jako `value` zadáte `text` se symbolem procent na konci, vrátí se převedené desítkové číslo. Jinak se hodnota převede pomocí `Number.From` na typ `number`. Volitelně je možné zadat i `culture` (např. en-US).


## Examples

### Example #1
Vrátí hodnotu typu `percentage` z `"12.3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
