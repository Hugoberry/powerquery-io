---
title: Text.PositionOf
---

# Text.PositionOf


## Description

Vrátí první pozici hodnoty (-1, pokud není nalezena).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Details

Vrátí pozici zadaného výskytu textové hodnoty <code>substring</code> nalezené v řetězci <code>text</code>.    K určení pozice výskytu, která se má vrátit, se může použít volitelný parametr <code>occurrence</code> (výchozí je první výskyt).    Vrátí -1, pokud hodnota <code>substring</code> nebyla nalezena.      <div>        <code>comparer</code> je porovnávač <code>Comparer</code>, který slouží k řízení porovnání. Porovnávače se můžou použít k porovnání bez rozlišení malých a velkých písmen nebo k porovnání se zohledněním jazykové verze a národního prostředí.      </div>      <div>        V jazyce vzorců jsou dostupné následující zabudované porovnávače:      </div>      <ul>        <li><code>Comparer.Ordinal:</code> Slouží k provádění přesného řadového porovnání.</li>        <li><code>Comparer.OrdinalIgnoreCase:</code> Slouží k provádění přesného řadového porovnání bez rozlišení malých a velkých písmen.</li>        <li><code>Comparer.FromCulture</code>: Slouží k provádění porovnání zohledňujícího jazykovou verzi.</li>      </ul>


## Examples

### Example #1 
Získá pozici prvního výskytu textu „World“ v textu „Hello, World! Hello, World!“.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Získá pozici posledního výskytu textu „World“ v řetězci „Hello, World! Hello, World!“.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
