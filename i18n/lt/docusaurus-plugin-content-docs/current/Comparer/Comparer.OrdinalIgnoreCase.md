---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Pateikiama lyginimo funkcija, neskirianti didžiųjų ir mažųjų raidžių, kuri lygina reikšmes naudodama eilės numerių taisykles.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Pateikiama lyginimo funkcija, neskirianti didžiųjų ir mažųjų raidžių, kuri naudoja eiliškumo taisykles pateiktoms reikšmėms <code>x</code> ir <code>y</code> palyginti.<br />        <br />        Lyginimo funkcija priima du argumentus ir pateikia -1, 0 arba 1, atsižvelgdama į tai, ar pirmoji reikšmė yra mažesnė, lygi ar didesnė už sekundę.    


## Examples

### Example #1 
Naudodami eilės numerių taisykles, kuriose neskiriamos didžiosios ir mažosios raidės, palyginkite „Abc“ su „abc“. Atkreipkite dėmesį, kad „Abc“ reikšmė yra mažesnė už „abc“ naudojant &lt;code&gt;Comparer.Ordinal&lt;/code&gt;. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
