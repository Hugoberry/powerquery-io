---
title: Text.StartsWith
---

# Text.StartsWith


Označuje, ali se besedilo začne z navedeno vrednostjo.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Vrne"true", če se vrednost besedila `text` začne z vrednostjo besedila `substring`.

-   `text`: vrednost `text`, ki jo želite poiskati.
-   `substring`: vrednost `text`, ki je podniz, ki ga želite poiskati v `text`.
-   `comparer`: *(izbirno)* vrednost `Comparer`, ki se uporablja za nadzor primerjave. Na primer, `Comparer.OrdinalIgnoreCase` se lahko uporablja za iskanja, ki ne razlikujejo med velikimi in malimi črkami.

`comparer` je `Comparer`, ki se uporablja za nadzor primerjave. Primerjalniki se lahko uporabljajo za primerjave, ki ne razlikujejo med velikimi in malimi črkami, ali primerjave, ki upoštevajo kulturo in območne nastavitve.

Ti vgrajeni primerjalniki so na voljo v jeziku formule:

-   `Comparer.Ordinal`: uporablja se za izvajanje točne vrstilne primerjave.
-   `Comparer.OrdinalIgnoreCase`: uporablja se za izvajanje točne vrstilne primerjave, ki ne razlikuje med velikimi in malimi črkami.
-   `Comparer.FromCulture`: uporablja se za izvajanje primerjave, ki upošteva kulturo.


## Examples

### Example #1
Preverite, ali se besedilo"Hello, World"začne z besedilom"hello".
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Preverite, ali se besedilo"Hello, World"začne z besedilom"Hello".
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Brez oziranja na velike in male črke preverite, ali se besedilo"Hello, World"začne z besedilom"hello".
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
