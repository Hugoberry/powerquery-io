---
title: Text.StartsWith
---

# Text.StartsWith


Indică dacă textul începe cu o valoare specificată.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Returnează True dacă valoarea text `text` începe cu valoarea text `substring`.

-   `text`: o valoare `text` care urmează să fie căutată.
-   `substring`: O valoare `text` care este subșirul de căutat în `text`.
-   `comparer`: *\[opțional\]* Un `Comparer` utilizat pentru controlul comparației. De exemplu, `Comparer.OrdinalIgnoreCase` poate fi utilizat pentru a efectua căutări care nu sunt sensibile la litere mari și mici.

`comparer` este un `Comparer` care este utilizat pentru a controla comparația. Comparatorii pot fi utilizați pentru a oferi comparații care nu sunt sensibile la litere mari și mici sau care țin cont de cultura și setările regionale.

Următorii comparatori predefiniți sunt disponibili în limba formulei:

-   `Comparer.Ordinal`: utilizat pentru a efectua o comparație ordinală exactă.
-   `Comparer.OrdinalIgnoreCase`: utilizat pentru a efectua o comparație exactă care nu este sensibilă la litere mari și mici.
-   `Comparer.FromCulture`: utilizat pentru a efectua o comparație receptivă la cultură.


## Examples

### Example #1
Verificaţi dacă textul „Hello, World” începe cu textul „hello”.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Verificaţi dacă textul „Hello, World” începe cu textul „Hello”.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Ignorând literele mari și mici, verificați dacă textul „Bună ziua, Lume” începe cu textul „bună ziua”.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
