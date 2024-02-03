---
title: Text.Combine
---

# Text.Combine


## Description

Zřetězí seznam textových hodnot do jedné textové hodnoty.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Vrátí výsledek kombinování seznamu textových hodnot, <code>texts</code>, do jedné textové hodnoty. Všechny hodnoty <code>null</code> přítomné v <code>texts</code> se ignorují.    Je možné zadat volitelnou položku <code>separator</code> použitou v konečném kombinovaném textu.


## Examples

### Example #1 
Spojí textové hodnoty „Seattle“ a „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Spojí textové hodnoty „Seattle“ a „WA“ oddělené čárkou a mezerou.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Zkombinujte hodnoty Seattle, &lt;code&gt;null&lt;/code&gt; a WA oddělené čárkou a mezerou. (Všimněte si, že &lt;code&gt;null&lt;/code&gt; se ignoruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
