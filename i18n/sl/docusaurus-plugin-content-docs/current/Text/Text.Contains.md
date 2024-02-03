---
title: Text.Contains
---

# Text.Contains


## Description

Vrne podatek, ali besedilo vsebuje podniz.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Zazna, ali <code>text</code> vsebuje vrednost <code>substring</code>. Vrne "true", če je najdena vrednost. Ta funkcija ne podpira nadomestnih znakov ali regularnih izrazov.      <br />      <br /> Izbirni argument <code>comparer</code> lahko uporabite za določanje primerjav, ki ne razlikujejo med velikimi in malimi črkami, ali kulture in območnih nastavitev. V jeziku formule so na voljo ti vgrajeni primerjalniki: <ul> <li><code>Comparer.Ordinal</code>: Uporablja se za izvajanje primerjave vrstnega števnika, občutljivega na velike in male črke</li> <li><code>Comparer.OrdinalIgnoreCase</code>:  Uporablja se za primerjavo vrstilnih števnikov</li> <li><code>Comparer.FromCulture</code></li>      </ul>


## Examples

### Example #1 
Ugotovite, ali besedilo &#34;Hello World&#34; vsebuje &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Ugotovite, ali besedilo &#34;Hello World&#34; vsebuje &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Ugotovite, ali besedilo &#34;Pozdravljen, svet&#34; vsebuje &#34;pozdravljen&#34;, pri tem pa uporabite primerjalnik, ki ne razlikuje med velikimi in malimi črkami.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
