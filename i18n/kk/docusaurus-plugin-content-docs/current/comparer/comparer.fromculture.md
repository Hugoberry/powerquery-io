---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Көрсетілген тіл мен аймақтық параметрлері және пернетақта регистрінің есебі негізінде салыстыру функциясын қайтарады.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Салыстыруды орындау үшін `ignoreCase` арқылы көрсетілген `culture` және пернетақта регистрінің есебін пайдаланатын салыстыру функциясын қайтарады.  
  
Салыстыру функциясы екі аргументті қабылдайды және бірінші мән сәйкесінше екіншісінен кіші, оған тең немесе үлкен болса -1, 0 немесе 1 мәнін қайтарады.  
  
`ignoreCase` үшін әдепкі мән — false. `culture` .NET Framework қолдау көрсететін тілдердің бірі болуы керек (мысалы, "en-US").


## Examples

### Example #1
Мәндердің тең екендігін анықтау үшін "en-US" тілін пайдалана отырып "а" және "A" мәндерін тексеріңіз.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Мәндердің тең екендігін анықтау үшін регистрді ескермей, "en-US" тілін пайдалана отырып "а" және "A" мәндерін тексеріңіз.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
