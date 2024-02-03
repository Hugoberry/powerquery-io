---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Označuje, ali se besedilo konča v navedeni vrednosti.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Označuje, ali se navedeno besedilo <code>text</code> konča z navedeno vrednostjo, <code>substring</code>. Oznaka razlikuje med velikimi in malimi črkami.      <div>        <code>comparer</code> je <code>Comparer</code>, ki se uporablja za nadzor primerjave. S primerjalniki je mogoče določiti primerjave, ki ne razlikujejo med velikimi in malimi črkami oziroma upoštevajo kulturo ali območne nastavitve.      </div>      <div>        Za jezik formule so na voljo ti vgrajeni primerjalniki:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: uporablja se za natančno primerjavo vrstilnih števnikov</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami</li>        <li> <code>Comparer.FromCulture</code>: uporablja se za primerjavo, ki upošteva kulturo</li>      </ul>


## Examples

### Example #1 
Preverite, ali se &#34;Hello, World&#34; konča z &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Preverite, ali se &#34;Hello, World&#34; konča z &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
