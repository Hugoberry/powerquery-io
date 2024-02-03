---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Көрсетілген орындар мен ұзындықтарды пайдаланып мәтін тізімін біріктіретін функцияны қайтарады.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Көрсетілген шығыс орындары мен ұзындықтарды пайдаланып, мәтін мәндерінің тізімін бір мәтіндік мәнге біріктіретін функцияны қайтарады. Нөл ұзындығы бүкіл мәтін мәнін қосу керектігін көрсетеді.


## Examples

### Example #1 
Көрсетілген шығыс орындары мен ұзындықтарды пайдаланып мәтін мәндерінің тізімін біріктіріңіз.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
