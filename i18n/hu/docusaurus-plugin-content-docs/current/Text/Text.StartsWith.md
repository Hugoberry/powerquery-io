---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Azt jelzi, hogy a szöveg egy megadott értékkel kezdődik-e.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

True értéket ad vissza, ha a(z) <code>text</code> szöveges érték a(z) <code>substring</code> szöveges értékkel kezdődik.      <ul>        <li><code>text</code>: <i></i> A keresendő <code>text</code> érték</li>        <li><code>substring</code>: <i></i> Egy <code>text</code> érték, amely a(z) <code>substring</code> szöveges értékben keresendő sztringrészlet.</li>        <li><code>comparer</code>: <i>[Nem kötelező]</i> Az összehasonlítást szabályozó <code>Comparer</code>. A <code>Comparer.OrdinalIgnoreCase</code> például a kis- és nagybetűket meg nem különböztető keresések végrehajtására használható.</li>      </ul>      <div>        A(z) <code>comparer</code> egy <code>Comparer</code>, amely az összehasonlítás szabályozására használható. Összehasonlítók használatával végezhető a kis- és nagybetűket meg nem különböztető, illetve a kulturális környezetet és a területi beállítást figyelembe vevő összehasonlítás.      </div>      <div>        A következő beépített összehasonlítók érhetők el a képletnyelvben:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Pontos sorrendi összehasonlításhoz használható.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.</li>        <li> <code>Comparer.FromCulture</code>: A kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál.</li>      </ul>


## Examples

### Example #1 
Annak ellenőrzése, hogy a „Hello, World” szöveg a „hello” szöveggel kezdődik-e
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Annak ellenőrzése, hogy a „Hello, World” szöveg a „Hello” szöveggel kezdődik-e
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
