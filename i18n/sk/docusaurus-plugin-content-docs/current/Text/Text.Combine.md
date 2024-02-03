---
title: Text.Combine
---

# Text.Combine


## Description

Zreťazí zoznam textových hodnôt na jednu textovú hodnotu.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

Vráti výsledok kombinujúci zoznam textových hodnôt <code>texts</code> do jednej textovej hodnoty. Všetky hodnoty <code>null</code>, ktoré obsahuje <code>texts</code>, sa ignorujú.    Možno zadať voliteľnú hodnotu <code>separator</code> použitú v konečnom kombinovanom texte.


## Examples

### Example #1 
Kombinujte textové hodnoty &#34;Seattle&#34; a &#34;WA&#34;.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Kombinujte textové hodnoty Seattle a WA oddelené čiarkou a medzerou.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Skombinujte hodnoty Seattle, &lt;code&gt;null&lt;/code&gt; a WA oddelené čiarkou a medzerou. (Upozorňujeme, že hodnota &lt;code&gt;null&lt;/code&gt; sa ignoruje.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
