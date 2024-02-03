---
title: Text.Combine
---

# Text.Combine


## Description

Egy szöveges értékké fűzi össze a szöveges értékek listáját.


## Syntax

```powerquery
Text.Combine(
    texts as list,
    optional separator as text
) as text
```


## Details

A szöveges értékek listájának (<code>texts</code>) egyetlen szöveges értékbe való kombinálásának eredményét adja vissza. A <code>texts</code> elemben található <code>null</code> értékek figyelmen kívül lesznek hagyva.    Megadható a végső kombinált szövegben használt opcionális <code>separator</code>.


## Examples

### Example #1 
Összevonja a „Seattle” és a „WA” szöveges értéket.
```powerquery
Text.Combine({"Seattle", "WA"})
```

Result: 
```powerquery
"SeattleWA"
```


### Example #2 
Összevonja a „Seattle” és a „WA” szöveges értéket úgy, hogy egy vesszőt és egy szóközt („, ”) használ elválasztóként.
```powerquery
Text.Combine({"Seattle", "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```


### Example #3 
Kombinálja a „Seattle“, a &lt;code&gt;null&lt;/code&gt; és a „WA“ értékeket vesszővel és szóközzel elválasztva. (Vegye figyelembe, hogy a(z) &lt;code&gt;null&lt;/code&gt; figyelmen kívül van hagyva.)
```powerquery
Text.Combine({"Seattle", null, "WA"}, ", ")
```

Result: 
```powerquery
"Seattle, WA"
```




## Category
Text.Transformations
