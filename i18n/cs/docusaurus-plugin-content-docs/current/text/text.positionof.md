---
title: Text.PositionOf
---

# Text.PositionOf


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


## Remarks

Vrátí pozici zadaného výskytu textové hodnoty `substring` nalezené v řetězci `text`. K určení pozice výskytu, která se má vrátit, se může použít volitelný parametr `occurrence` (výchozí je první výskyt). Vrátí -1, pokud hodnota `substring` nebyla nalezena.

`comparer` je porovnávač `Comparer`, který slouží k řízení porovnání. Porovnávače se můžou použít k porovnání bez rozlišení malých a velkých písmen nebo k porovnání se zohledněním jazykové verze a národního prostředí.

V jazyce vzorců jsou dostupné následující zabudované porovnávače:

-   `Comparer.Ordinal:` Slouží k provádění přesného řadového porovnání.
-   `Comparer.OrdinalIgnoreCase:` Slouží k provádění přesného řadového porovnání bez rozlišení malých a velkých písmen.
-   `Comparer.FromCulture`: Slouží k provádění porovnání zohledňujícího jazykovou verzi.


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
