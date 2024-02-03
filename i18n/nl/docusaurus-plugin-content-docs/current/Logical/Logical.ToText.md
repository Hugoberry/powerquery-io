---
title: Logical.ToText
---

# Logical.ToText


## Description

Retourneert de tekst &#34;true&#34; of &#34;false&#34;, uitgaande van een logische waarde.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Maakt een tekstwaarde van de logische waarde <code>logicalValue</code>: <code>true</code> of <code>false</code>. Als <code>logicalValue</code> geen logische waarde is, wordt er een uitzondering gegenereerd.


## Examples

### Example #1 
Een tekstwaarde van de logische &lt;code&gt;true&lt;/code&gt; maken.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
