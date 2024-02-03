---
title: Duration.From
---

# Duration.From


## Description

Ustvari trajanje iz dane vrednosti.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Vrne vrednost <code>duration</code> iz dane vrednosti <code>value</code>. Če je dana vrednost <code>value</code> <code>null</code>, <code>Duration.From</code> vrne <code>null</code>.  Če je dana vrednost <code>value</code> <code>duration</code>, je vrnjena vrednost <code>value</code>. V vrednost <code>duration</code> lahko pretvorite vrednosti teh vrst:      <ul>        <li><code>text</code>: vrednost <code>duration</code> trajanja iz besedilnih oblik pretečenega časa (d.h:m:s). Za podrobnosti glejte <code>Duration.FromText</code>.</li>        <li><code>number</code>: ekvivalent <code>duration</code> za število celih dni in dni, izraženih z ulomki, predstavljen kot <code>value</code>.</li>      </ul>Če je vrednost <code>value</code> katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1 
Pretvorite &lt;code&gt;2.525&lt;/code&gt; v vrednost &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
