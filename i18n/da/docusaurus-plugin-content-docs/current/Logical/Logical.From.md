---
title: Logical.From
---

# Logical.From


## Description

Opretter en logisk værdi ud fra den angivne værdi.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Returnerer en værdi af typen <code>logical</code> ud fra den angivne <code>value</code>. Hvis den angivne <code>value</code> er <code>null</code>, vil <code>Logical.From</code> returnere <code>null</code>. Hvis den angivne <code>value</code> er <code>logical</code>, returneres <code>value</code>. Værdier af følgende typer kan konverteres til en værdi af typen <code>logical</code>:      <ul>        <li><code>text</code>: En værdi af typen <code>logical</code> fra tekstværdien, enten <code>"true"</code> eller <code>"false"</code>. Se <code>Logical.FromText</code> for at få flere oplysninger.</li>        <li><code>number</code>: <code>false</code>, hvis <code>value</code> er lig med <code>0</code>. Ellers <code>true</code>.</li>      </ul>Hvis <code>value</code> er af en anden type, returneres der en fejl.


## Examples

### Example #1 
Konvertér &lt;code&gt;2&lt;/code&gt; til en værdi af typen &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
