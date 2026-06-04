---
title: Text.StartsWith
---

# Text.StartsWith


Azt jelzi, hogy a szöveg egy megadott értékkel kezdődik-e.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Igaz értéket ad vissza, ha a(z) `text` szöveges érték a(z) `substring` szöveges értékkel kezdődik.

-   `text`: A keresendő `text` (szöveges) érték.
-   `substring`: Egy `text` (szöveges) érték, amely a következőben keresendő sztringrészlet: `text`.
-   `comparer`: *(Nem kötelező)* Az összehasonlítás irányításához használt `Comparer` (összehasonlító). Például a `Comparer.OrdinalIgnoreCase` használható a kis- és nagybetűk megkülönböztetése nélküli keresésekhez.

A(z) `comparer` egy `Comparer` (Összehasonlító), amely az összehasonlítás irányítására szolgál. Az összehasonlítók a kis- és nagybetűk megkülönböztetésének mellőzésére, vagy kulturális és helyfüggő összehasonlítások során használhatók.

A képletnyelvben a következő beépített összehasonlítók érhetők el:

-   `Comparer.Ordinal`: Pontos sorszám szerinti összehasonlítás elvégzésére szolgál.
-   `Comparer.OrdinalIgnoreCase`: A kis- és nagybetűk megkülönböztetése nélküli, pontos sorrend szerinti összehasonlítás végrehajtására szolgál.
-   `Comparer.FromCulture`: Kultúratudatos összehasonlításra használható.


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


### Example #3
A kis- és nagybetűk figyelmen kívül hagyásával ellenőrzi, hogy a „Hello, World” szöveg a „hello” szöveggel kezdődik-e.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
