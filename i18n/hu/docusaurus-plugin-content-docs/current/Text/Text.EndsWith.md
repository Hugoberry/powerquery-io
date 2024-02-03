---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Azt jelzi, hogy a szöveg a megadott értékkel végződik-e.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Azt jelzi, hogy a megadott szöveg (<code>text</code>) a megadott értékre (<code>substring</code>) végződik-e. A függvény megkülönbözteti a kis- és nagybetűket.      <div>        A(z) <code>comparer</code> egy <code>Comparer</code>, amely az összehasonlítás szabályozására szolgál. Az összehasonlítók a kis- és nagybetűket meg nem különböztető vagy kulturális környezetre és területi beállításra érzékeny összehasonlítások megadására használhatók.      </div>      <div>        A következő beépített összehasonlítók érhetőek el a képletnyelvben:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Kis- és nagybetűket meg nem különböztető, pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li> <code>Comparer.FromCulture</code>: Kulturális környezetre érzékeny összehasonlítás végrehajtására szolgál.</li>      </ul>


## Examples

### Example #1 
Ellenőrzi, hogy a „Hello, World” karakterlánc a „world” karakterlánccal végződik-e.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Ellenőrzi, hogy a „Hello, World” karakterlánc a „World” karakterlánccal végződik-e.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
