---
title: Text.EndsWith
---

# Text.EndsWith


## Description

Angiver, om teksten slutter med den angivne værdi.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Angiver, om den angivne tekst, <code>text</code>, slutter med den angivne værdi, <code>substring</code>. I resultatet skelnes der mellem store og små bogstaver.      <div>        <code>comparer</code> er en kode af typen <code>Comparer</code>, dvs. en sammenligningsfunktion, som bruges til at styre sammenligningen. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.      </div>      <div>        Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Bruges til at udføre en nøjagtig sammenligning af ordenstal</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Bruges til at udføre en nøjagtig sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver</li>        <li> <code>Comparer.FromCulture</code>: Bruges til at udføre en kulturel sammenligning</li>      </ul>


## Examples

### Example #1 
Kontrollér, om &#34;Hello, World&#34; slutter på &#34;world&#34;.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Kontrollér, om &#34;Hello, World&#34; slutter på &#34;World&#34;.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
