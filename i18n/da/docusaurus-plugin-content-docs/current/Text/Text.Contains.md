---
title: Text.Contains
---

# Text.Contains


Returnerer, om teksten indeholder understrengen.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Registrerer, om <code>text</code> indeholder værdien <code>substring</code>. Returnerer sand, hvis værdien findes. Denne funktion understøtter ikke jokertegn eller regulære udtryk.      <br />      <br />      Det valgfrie argument <code>comparer</code> kan bruges til at angive sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller kulturelle- og landemæssige sammenligninger.      Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:      <ul>        <li><code>Comparer.Ordinal</code>: Bruges til at foretage en sammenligning af ordenstal med forskel på store og små bogstaver</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Bruges til at udføre en sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver</li>        <li> <code>Comparer.FromCulture</code>: Bruges til at udføre en kulturafhængig sammenligning</li>      </ul>


## Examples

### Example #1 
Find ud af, om teksten &#34;Hello World&#34; indeholder &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Find ud af, om teksten &#34;Hello World&#34; indeholder &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Find ud af, om teksten &#34;Hello World&#34; indeholder &#34;hello&#34;, ved hjælp af en sammenligningsfunktionen, hvor der ikke skelnes mellem store og små bogstaver.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
