---
title: Number.FromText
---

# Number.FromText


Opretter tal ud fra almindelige tekstformater (15&#34;, &#34;3,423.10&#34;, &#34;5.0E-10&#34;).


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Returnerer en værdi af typen <code>number</code> ud fra den angivne tekstværdi, <code>text</code>. <ul>  <li><code>text</code>: Tekstrepræsentationen for en talværdi. Repræsentationen skal være i et almindelige talformat, som f.eks. "15", "3,423.10", "5.0E-10".</li>  <li><code>culture</code>: En valgfri kultur, der styrer, hvordan <code>text</code> fortolkes (f.eks. "en-US").</li> </ul>


## Examples

### Example #1 
Hent talværdien &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2 
Hent talværdien &lt;code&gt;&#34;5.0e-10&#34;&lt;/code&gt;.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
