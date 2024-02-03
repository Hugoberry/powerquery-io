---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Určuje, zda text končí zadanou hodnotou.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Určuje, jestli daný text <code>text</code> končí zadanou hodnotou <code>substring</code>. Při určení se rozlišují malá a velká písmena.      <div>        <code>comparer</code> je porovnávač <code>Comparer</code>, který slouží k řízení porovnání. Porovnávače můžou být použité k porovnání bez rozlišení malých a velkých písmen nebo porovnání zohledňujících jazykovou verzi a národní prostředí.      </div>      <div>        Následující zabudované porovnávače jsou dostupné v jazyce vzorců:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Slouží k provádění přesného řadového porovnání.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Slouží k provádění přesného řadového porovnání bez rozlišení malých a velkých písmen.</li>        <li> <code>Comparer.FromCulture</code>: Slouží k provádění porovnání zohledňujících jazykovou verzi.</li>      </ul>


## Examples

### Example #1 
Kontroluje, zda text „Hello, World“ končí textem „world“.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Kontroluje, zda text „Hello, World“ končí textem „World“.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
