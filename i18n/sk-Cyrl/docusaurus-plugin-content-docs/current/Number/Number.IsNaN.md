---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Udáva, či hodnota je NaN (nečíselná).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Udáva, či hodnota je NaN (nečíselná). Vráti hodnotu <code>true</code>, ak <code>number</code> je ekvivalentom k hodnote <code>Number.IsNaN</code>, inak vráti hodnotu <code>false</code>.


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
