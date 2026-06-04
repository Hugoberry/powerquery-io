---
title: Text.EndsWith
---

# Text.EndsWith


Označuje, ali se besedilo konča v navedeni vrednosti.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Označuje, ali se navedeno besedilo `text` konča z navedeno vrednostjo, `substring`. Oznaka razlikuje med velikimi in malimi črkami.

`comparer` je `Comparer`, ki se uporablja za nadzor primerjave. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami oziroma upoštevajo kulturo ali območne nastavitve.

Za jezik formule so na voljo ti vgrajeni primerjalniki:

-   `Comparer.Ordinal`: uporablja se za natančno primerjavo vrstilnih števnikov
-   `Comparer.OrdinalIgnoreCase`: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami
-   `Comparer.FromCulture`: uporablja se za primerjavo, ki upošteva kulturo


## Examples

### Example #1
Preverite, ali se"Hello, World"konča z"world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Preverite, ali se"Hello, World"konča z"World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
