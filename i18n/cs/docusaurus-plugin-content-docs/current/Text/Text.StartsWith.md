---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Značí, zda text začíná zadanou hodnotou.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Pokud textová hodnota <code>text</code> začíná textovou hodnotou <code>substring</code>, vrátí hodnotu True.      <ul>        <li><code>text</code>: <i></i> Hledaná hodnota <code>text</code></li>        <li><code>substring</code>: <i></i> Hledaná hodnota <code>text</code>, která je podřetězcem řetězce <code>substring</code>.</li>        <li><code>comparer</code>: <i>[volitelné]</i> Porovnávač <code>Comparer</code> použitý k provedení porovnání. K vyhledávání, při kterém se nerozlišují velká a malá písmena, jde například použít porovnávací objekt <code>Comparer.OrdinalIgnoreCase</code>.</li>      </ul>      <div>        <code>comparer</code> je porovnávač <code>Comparer</code>, který slouží k řízení porovnání. Porovnávače se dají použít k porovnání bez rozlišení malých a velkých písmen nebo porovnání zohledňujících jazykovou verzi a národní prostředí.      </div>      <div>        Následující zabudované porovnávače jsou dostupné v jazyce vzorců:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Slouží k provádění přesného řadového porovnání.</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Slouží k provádění přesného řadového porovnání bez rozlišení malých a velkých písmen.</li>        <li> <code>Comparer.FromCulture</code>: Slouží k provádění porovnání zohledňujících jazykovou verzi.</li>      </ul>


## Examples

### Example #1 
Zjistí, zda text Hello, World začíná textem hello.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Zjistí, zda text Hello, World začíná textem Hello.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
