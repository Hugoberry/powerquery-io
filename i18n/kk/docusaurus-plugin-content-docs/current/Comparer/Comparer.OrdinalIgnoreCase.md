---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


## Description

Мәндерді салыстыру үшін Қарапайым ережелерді пайдаланатын регистрді елемейтін салыстыру құралы функциясын қайтарады.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Details

Көрсетілген <code>x</code> және <code>y</code> мәндерін салыстыру үшін реттік ережелерді пайдаланатын пернетақта регистрінің есебімен салыстыру функциясын қайтарады.<br />        <br />        Салыстыру функциясы екі аргументті қабылдайды және бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтарады.    


## Examples

### Example #1 
Регистрді ескеретін Реттік ережелерді пайдалана отырып, &#34;Abc&#34; параметрін &#34;abc&#34; параметрімен салыстырыңыз. &lt;code&gt;Comparer.Ordinal&lt;/code&gt; пайдалана отырып, &#34;Abc&#34; параметрі &#34;abc&#34; параметрінен кіші екенін ескеріңіз. 
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
