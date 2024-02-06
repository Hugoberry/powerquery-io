---
title: Single.From
---

# Single.From


Opretter et enkeltpræcisions flydende tal ud fra den angivne værdi.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Returnerer en enkelt <code>number</code> værdi fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, returnerer <code>Single.From</code> <code>null</code>.  Hvis den angivne <code>value</code> er <code>number</code> inden for intervallet single, returneres <code>value</code>, ellers returneres der en fejl. Hvis <code>value</code> er af en anden type, konverteres den først til en <code>number</code> ved hjælp af <code>Number.FromText</code>. Der kan også angives en valgfri <code>culture</code> (f.eks. "en-US").


## Examples

### Example #1 
Få et enkeltpræcisions flydende tal af typen &lt;code&gt;number&lt;/code&gt; for &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
