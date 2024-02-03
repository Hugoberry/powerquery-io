---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Көрсетілген шығыс орындарын пайдаланып мәтін тізімін біріктіретін функцияны қайтарады.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Көрсетілген шығыс орындарын пайдаланып, мәтін мәндерінің тізімін бір мәтіндік мәнге біріктіретін функцияны қайтарады.


## Examples

### Example #1 
Мәтін мәндерінің тізімін оларды шығыста көрсетілген орындарға орналастыру арқылы біріктіріңіз.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
