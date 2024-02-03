---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Көрсетілген тіл мен аймақтық параметрлері және пернетақта регистрінің есебі негізінде салыстыру функциясын қайтарады.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Салыстыруды орындау үшін <code>ignoreCase</code> арқылы көрсетілген <code>culture</code> және пернетақта регистрінің есебін пайдаланатын салыстыру функциясын қайтарады.<br />      <br />      Салыстыру функциясы екі аргументті қабылдайды және бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтарады.<br />      <br />      <code>ignoreCase</code> үшін әдепкі мән — false. <code>culture</code> .NET Framework қолдау көрсететін тілдердің бірі болуы керек (мысалы, "en-US").    


## Examples

### Example #1 
Мәндердің тең екендігін анықтау үшін &#34;en-US&#34; тілін пайдалана отырып &#34;а&#34; және &#34;A&#34; мәндерін тексеріңіз.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Мәндердің тең екендігін анықтау үшін регистрді ескермей, &#34;en-US&#34; тілін пайдалана отырып &#34;а&#34; және &#34;A&#34; мәндерін тексеріңіз.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
