---
title: Number.FromText
---

# Number.FromText


## Description

Kreira brojeve od uobičajenih tekstualnih formata („15“, „3,423.10“, „5.0E-10“).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Details

Vraća vrednost <code>number</code> od date tekstualne vrednosti, <code>text</code>. <ul>  <li><code>text</code>: Tekstualna reprezentacija brojčane vrednosti. Reprezentacija mora da bude u uobičajenom formatu broja, kao što su „15“, „3423,10“, „5.0E-10“.</li>  <li><code>culture</code>: Opcionalna kultura koja kontroliše kako se <code>text</code> tumači (na primer, „en-US“).</li> </ul>


## Examples

### Example #1 
Dobijanje brojčane vrednosti za &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Dobijanje brojčane vrednosti za &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
