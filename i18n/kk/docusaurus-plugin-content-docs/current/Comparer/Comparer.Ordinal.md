---
title: Comparer.Ordinal
---

# Comparer.Ordinal


## Description

Мәндерді салыстыру үшін реттік ережелерді пайдаланатын салыстыру функциясын береді.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Details

Көрсетілген <code>x</code> және <code>y</code> мәндерін салыстыру үшін реттік ережелерді пайдаланатын салыстыру функциясын қайтарады.<br />      <br />      Салыстыру функциясы екі аргументті қабылдайды және егер бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтарады.    


## Examples

### Example #1 
Реттік ережелерді пайдалана отырып, &#34;encyclopædia&#34; және &#34;encyclopaedia&#34; мәндері эквивалентті екендігін анықтау. Бұл &lt;code&gt;Comparer.FromCulture(&#34;en-US&#34;)&lt;/code&gt; пайдаланған кезде эквивалентті екендігін ескеріңіз. 
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
