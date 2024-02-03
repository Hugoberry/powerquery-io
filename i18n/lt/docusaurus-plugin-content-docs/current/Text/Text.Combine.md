---
title: Text.Combine
---

# Text.Combine


## Description

Tekstinių reikšmių sąrašas sujungiamas į vieną tekstinę reikšmę.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Pateikiamas tekstinių reikšmių sąrašo, <code>texts</code>, sujungimo į vieną tekstinę reikšmę rezultatas. Visų <code>null</code> reikšmių, esančių <code>texts</code> , nepaisoma.    Galima nurodyti pasirinktinį <code>separator</code>, naudojamą galutiniame bendrame tekste.


## Examples

### Example #1 
Sujunkite tekstines reikšmes „Seattle“ ir „WA“.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Sujunkite tekstines reikšmes „Seattle“ ir „WA“ atskirdami kableliu ir tarpu.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Sujunkite reikšmes „Seattle“, &lt;code&gt;null&lt;/code&gt; ir „WA“, atskirdami kableliais ir tarpu. (Atkreipkite dėmesį, kad &lt;code&gt;null&lt;/code&gt; nepaisoma.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
