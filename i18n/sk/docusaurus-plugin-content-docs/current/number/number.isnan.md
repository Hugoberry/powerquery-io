---
title: Number.IsNaN
---

# Number.IsNaN


Udáva, či hodnota je NaN (nečíselná).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Udáva, či hodnota je NaN (nečíselná). Vráti `true`, ak `number` je ekvivalentné `Number.NaN`, inak `false`.


## Examples

### Example #1
Skontrolujte, či číslo 0 vydelené číslom 0 je NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Skontrolujte, či číslo 1 vydelené číslom 0 je NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
