---
title: Percentage.From
---

# Percentage.From


## Description

Pateikiama nurodytos reikšmės procentinė reikšmė.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Pateikiama <code>percentage</code> reikšmė iš nurodytos <code>value</code> reikšmės. Jei nurodyta <code>value</code> reikšmė yra <code>null</code>, <code>Percentage.From</code> pateikia <code>null</code>. Jei nurodyta <code>value</code> reikšmė yra <code>text</code> su po jos pateikiamu procento simboliu, bus pateiktas konvertuotas dešimtainis skaičius. Kitu atveju reikšmė bus konvertuota į <code>number</code> reikšmę naudojant <code>Number.From</code>. Taip pat gali būti pateiktas pasirenkamas <code>culture</code> (pavyzdžiui, „en-US“).


## Examples

### Example #1 
Gaukite &lt;code&gt;12.3%&lt;/code&gt;&lt;code&gt;percentage&lt;/code&gt; reikšmę.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
