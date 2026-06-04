---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Pateikiama lyginimo funkcija, kuri lygina reikšmes naudodama eilės numerio taisykles.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Pateikiama lyginimo funkcija, kuri naudoja eiliškumo taisykles pateiktoms reikšmėms `x` ir `y` palyginti.  
  
Lyginimo funkcija priima du argumentus ir pateikia -1, 0 arba 1, atsižvelgiant į tai, ar pirmoji reikšmė yra mažesnė, lygi ar didesnė nei antroji.


## Examples

### Example #1
Naudodami eilės numerio taisykles, palyginkite, ar „encyclopędia“ lygi „encyclopaedia“. Prisiminkite, kad jos lygios naudojant `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
