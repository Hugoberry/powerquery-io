---
title: Text.StartsWith
---

# Text.StartsWith


## Description

Angiver, om teksten starter med en angivet værdi.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Returnerer sand, hvis tekstværdien <code>text</code> starter med tekstværdien <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> En værdi af typen <code>text</code>, der skal søges i</li>        <li><code>substring</code>: <i></i> En værdi af typen <code>text</code>, som er den understreng, der søges efter i <code>substring</code></li>        <li><code>comparer</code>: <i>[Valgfrit]</i> En kode af typen <code>Comparer</code> bruges til at styre sammenligningen. <code>Comparer.OrdinalIgnoreCase</code> kan for eksempel bruges til at udføre søgninger, hvor der ikke skelnes mellem store og små bogstaver</li>      </ul>      <div>        <code>comparer</code> er en kode af typen <code>Comparer</code>, dvs. en sammenligningsfunktion, som bruges til at styre sammenligningen. Sammenligningsfunktioner kan bruges til at udføre sammenligninger, hvor der ikke skelnes mellem store og små bogstaver, eller udføre kulturelle- og landemæssige sammenligninger.      </div>      <div>        Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Bruges til at udføre en nøjagtig sammenligning af ordenstal</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Bruges til at udføre en nøjagtig sammenligning af ordenstal, hvor der ikke skelnes mellem store og små bogstaver</li>        <li> <code>Comparer.FromCulture</code>: Bruges til at udføre en kulturel sammenligning</li>      </ul>


## Examples

### Example #1 
Kontrollér, om teksten &#34;Hello, World&#34; starter med teksten &#34;hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Kontrollér, om teksten &#34;Hello, World&#34; starter med teksten &#34;Hello&#34;.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
