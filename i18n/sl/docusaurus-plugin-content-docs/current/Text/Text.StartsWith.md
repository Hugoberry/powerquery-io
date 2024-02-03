---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Označuje, ali se besedilo začne z navedeno vrednostjo.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Vrne "true", če se besedilna vrednost <code>text</code> začne z besedilno vrednostjo <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> vrednost <code>text</code>, ki bo iskana</li>        <li><code>substring</code>: <i></i> vrednost <code>text</code>, ki je podniz, ki bo iskan v <code>substring</code></li>        <li><code>comparer</code>: <i>[Izbirno]</i> <code>Comparer</code>, ki se uporablja za nadzor primerjave. S <code>Comparer.OrdinalIgnoreCase</code> lahko na primer izvedete iskanje, ki ne razlikuje med velikimi in malimi črkami</li>      </ul>      <div>        <code>comparer</code> je <code>Comparer</code>, ki se uporablja za nadzor primerjave. S primerjalniki lahko izvedete primerjave, ki ne razlikujejo črk, ali primerjave, ki upoštevajo kulturo in območne nastavitve.      </div>      <div>        Za jezik formule so na voljo ti vgrajeni primerjalniki:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: uporablja se za natančno primerjavo vrstilnih števnikov</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: uporablja se za natančno primerjavo vrstilnih števnikov, ki ne razlikuje med velikimi in malimi črkami</li>        <li> <code>Comparer.FromCulture</code>: uporablja se za primerjavo, ki upošteva kulturo</li>      </ul>


## Examples

### Example #1 
Preverite, ali se besedilo &#34;Hello, World&#34; začne z besedilom &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Preverite, ali se besedilo &#34;Hello, World&#34; začne z besedilom &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
