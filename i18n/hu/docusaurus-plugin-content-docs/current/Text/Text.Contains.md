---
title: Text.Contains
---

# Text.Contains


## Description

Visszaadja, hogy a szöveg tartalmazza-e a sztringrészletet.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Azt észleli, hogy <code>text</code> tartalmazza-e a(z) <code>substring</code> értéket. True értéket ad vissza, ha az érték megtalálható. Ez a függvény nem támogatja a helyettesítő karaktereket és a reguláris kifejezéseket.      <br />      <br />     A választható <code>comparer</code> argumentum a kis- és nagybetűk megkülönböztetésére, illetve kulturális környezetre és területi beállításokra érzékeny összehasonlításokra használható.      A következő beépített összehasonlítók érhetők el a képletnyelvben:       <ul>        <li><code>Comparer.Ordinal</code>: Kis- és nagybetűket megkülönböztető sorrendi összehasonlítás végrehajtására szolgál.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Kis- és nagybetűket meg nem különböztető sorrendi összehasonlítás végrehajtására szolgál.</li>        <li> <code>Comparer.FromCulture</code>: Kulturális környezetre érzékeny összehasonlítás végrehajtására szolgál.</li>      </ul>


## Examples

### Example #1 
Megállapítja, hogy a „Hello World” szöveg tartalmazza-e a „Hello” szövegrészt.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Megállapítja, hogy a „Hello World” szöveg tartalmazza-e a „hello” szövegrészt.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Annak megkeresése, hogy a szöveg „Hello World” tartalmaz-e „hello” kifejezést, a kis- és nagybetűket nem megkülönböztető összehasonlító használatával.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
