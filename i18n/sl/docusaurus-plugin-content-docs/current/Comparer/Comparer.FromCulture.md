---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Vrne funkcijo primerjalnika na podlagi določene kulture in razlikovanju med velikimi in malimi črkami.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Vrne funkcijo primerjalnika, ki uporablja <code>culture</code> in razlikovanje med velikimi in malimi črkami, ki jo določa <code>ignoreCase</code>, za izvajanje primerjav.<br />      <br />      Funkcija primerjalnika sprejme dva argumenta in vrne –1, 0 ali 1 glede na to, ali je prva vrednost manjša od, enaka ali večja od druge.<br />      <br />      Privzeta vrednost za <code>ignoreCase</code> je "false". Polje <code>culture</code> mora biti ena od območnih nastavitev, ki jih podpira ogrodje .NET framework (na primer "sl-SI").    


## Examples

### Example #1 
Primerjajte &#34;a&#34; in &#34;A&#34; s področnimi nastavitvami &#34;en-US&#34; in določite, ali so vrednosti enake.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Primerjajte &#34;a&#34; in &#34;A&#34; s področnimi nastavitvami &#34;en-US&#34; in ne razlikujte med malimi in velikimi črkami ter nato določite, ali so vrednosti enake.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
