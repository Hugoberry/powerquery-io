---
title: Comparer.Equals
---

# Comparer.Equals


Returnerer en logisk værdi på baggrund af lighedskontrollen af de to angivne værdier.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Returnerer en <code>logisk</code> værdi baseret på lighedskontrol af de to angivne værdier, <code>x</code> og <code>y</code>, ved hjælp af den angivne <code>comparer</code>.      <div>        <code>comparer</code> er en <code>Comparer</code> som bruges til at styre sammenligningen.        En sammenligningsfunktion er en funktion, der accepterer to argumenter og returnerer -1, 0 eller 1 baseret på, om den første værdi er mindre end, lig med  eller større end sekundet.        Sammenligninger kan bruges til at skelne mellem store og små bogstaver eller kultur- og landestandardafhængige sammenligninger.        </div>        <div>        Følgende indbyggede sammenligningsfunktioner er tilgængelige på formelsproget:        </div>        <ul>        <li><code>Comparer.Ordinal</code>:  Bruges til at udføre en nøjagtig sammenligning af ordenstal</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Bruges til at udføre en nøjagtig sammenligning, hvor der ikke skelnes mellem store og små bogstaver </li>        <li> <code>Comparer.FromCulture</code>: Bruges til at udføre en kulturorienteret sammenligning</li>        </ul>


## Examples

### Example #1 
Sammenlign &#34;1&#34; og &#34;A&#34; ved hjælp af landestandarden &#34;en-US&#34; for at se, om værdierne er de samme.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
